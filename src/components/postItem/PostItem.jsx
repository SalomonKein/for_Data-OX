import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getComments, getPosts, getUsers } from '../actions/posts';
import Comment from './comments/Comment';
import CreateComment from './CreateComment/CreateComment';
import "./postItem.scss"

const PostItem = () => {
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)

    let navigate = useNavigate();
    const posts = useSelector(state => state.state.posts);
    const users = useSelector(state => state.state.users);
    const perPage = useSelector(state => state.state.perPage);
    const currentPage = useSelector(state => state.state.currentPage);
    const comments = useSelector(state => state.state.comments);
    const isFetching = useSelector(state => state.state.isFetching)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getPosts(perPage, currentPage))
    }, [])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        dispatch(getComments(id))
    }, [])

    function handleClick() {
        navigate("/");
    }

    function updateComp() {
        setIsUpdate(!isUpdate)
    }

    function title() {
        return posts.find((e) => e.id == id);
    }

    const userId = title()?.userId
    const author = users.find((u) => u.id == userId)


    return (
        <div className="item">
            <button className="item-btn-back" onClick={() => handleClick()}>Back</button>
            <div className="item-title">
                {isFetching === false
                    ?
                    posts.find((e) => e.id == id)?.title
                    :
                    <div className="fetching">
                    </div>
                }
            </div>
            <div className="item-content">{posts.find((e) => e.id == id)?.body}</div>
            <div className="item-author">Author: {author?.name}</div>
            {comments.map((comm) =>
                <Comment
                    className="item-comments"
                    key={Date.now() * Math.random()}
                    comment={comm}
                ></Comment>)}
            <CreateComment id={id} update={updateComp} />
        </div>

    )
}


export default PostItem