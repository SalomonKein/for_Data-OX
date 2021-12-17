import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getComments, getPosts, getUsers } from '../actions/posts';
import "./postItem.scss"

const PostItem = () => {  
    const dispatch = useDispatch()
    // useEffect(() => {    
    //     dispatch(getPosts()),
    //     dispatch(getUsers()),
    //     dispatch(getComments())     
    // }, [])

    
    let navigate = useNavigate();
    const posts = useSelector(state => state.state.posts);
    const users = useSelector(state => state.state.users);
    const comments = useSelector(state => state.state.comments);
    const isFetching = useSelector(state => state.state.isFetching)
    const {id} = useParams()
    console.log(posts, "posts",
        users, "users",
        comments, "comments",);

    function handleClick() {
        navigate("/");
    }

    // function title(){
    //     return posts.find((e)=>e.id===id);
    //  }
    //  const postTitle = title().title
    
    return (
        <div className="item">
            <button className="item-btn-back" onClick={()=>handleClick()}>Back</button>
            <div className="item-title">
            {/* { isFetching ===false
            ?            
            posts.find((e)=>e.id===id).title
                :
                <div className="fetching">
                </div>
            } */}
            </div>
            <div className="item-content">body</div>
            <div className="item-author">author</div>
            <div className="item-comments">comments</div>
            <div className="item-create-comment">Create comment</div>
        </div>
      
    )
}


export default PostItem