import React from "react";
import "./post.scss";

const Post = (props) => {
const post = props.post


    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-name">{props.post.title}</div>
                <div className="post-header-comments">Comments: 0</div>
            </div>
            <div className="post-content">{props.post.body}</div>
            <div className="post-author">Author: {props.post.id}</div>
        </div>
    )
}

export default Post