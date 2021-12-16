import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCurrentPage } from "../../reducers/postReducer";
import { createPages } from "../../utils/pageCreator";
import { getPosts } from "../actions/posts";
import './main.scss'
import Post from "./post/Post";

const Main= () => {
const dispatch = useDispatch()
const posts = useSelector(state => state.posts.posts)
const isFetching = useSelector(state => state.posts.isFetching)
const currentPage = useSelector(state => state.posts.currentPage)
const perPage = useSelector(state => state.posts.perPage)
const totalCount = useSelector(state => state.posts.totalCount)
const [searchValue, setSearchValue] = useState("");
const pages=[]

createPages(pages, totalCount, currentPage)

useEffect(() => {    
    dispatch(getPosts(perPage, currentPage))    
}, [currentPage])
 
function searchHandler(){
    console.log(searchValue)
}

    return (
        <div>
            <div className="search">
                <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="text" placeholder="Enter the author of the post" className="search-input"/>
            <button onClick={() => searchHandler()} className="search-btn">Start search</button>
            </div>
            { isFetching ===false
            ?            
            posts
                .filter((val) => {
                                if (searchValue === "") {
                                return val;
                                } else if (
                                val.title.toLowerCase().includes(searchValue.toLowerCase())
                                ) {
                                 return val;
                                }
                })
                .map(post=>
                <Post post={post} key={Date.now()*Math.random()}/>)
                :
                <div className="fetching">

                </div>
            }
            <div className="pages">
                {pages.map((page)=> <span key={Date.now()*Math.random()} className={currentPage==page ? "current-page":"page"}
            onClick = {() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>  
        </div>
    )
}

export default Main