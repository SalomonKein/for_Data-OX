import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getComments, getUsers } from "../../actions/posts";
import "./post.scss";

const Post = (props) => {
    console.log(props, "props from Post")
const post = props.post;
const users = props.users;
const comments = useSelector(state => state.state.comments);

console.log(users, "users from Post");
function author(){
   return users.find((e)=>e.id===props.post.userId)
}
let authorName = author().name;






    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-name"><NavLink to={`/post/${props.post.id}`}>{props.post.title}</NavLink> </div>
                <div className="post-header-comments">Comments: {comments.filter((e) =>e.postId===props.post.id).length}</div>
            </div>
            <div className="post-content">{props.post.body}</div>
            <div className="post-author">Author: {authorName}</div>
        </div>
    )
}

export default Post