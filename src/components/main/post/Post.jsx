import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getComments, getUsers } from "../../actions/posts";
import "./post.scss";

const Post = (props) => {
    const dispatch = useDispatch()

    const post = props.post;
    const users = useSelector(state => state.state.users);
    const comments = useSelector(state => state.state.comments);
    const allComments = useSelector(state => state.state.allComments);


    function author() {
        return users.find((e) => e.id === props.post.userId)
    }
    let authorName = author()?.name;

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-name"><NavLink to={`/post/${props.post.id}`}>{props.post.title}</NavLink> </div>
                <div className="post-header-comments">Comments: {allComments.filter((e) => e.postId === props.post.id).length}</div>
            </div>
            <div className="post-content">{props.post.body}</div>
            <div className="post-author">Author: {authorName}</div>
        </div>
    )
}

export default Post