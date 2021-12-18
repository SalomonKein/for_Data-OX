import React from 'react'
import './comment.scss'

export default function Comment(props) {
    const { comment } = { ...props }

    return (
        <div className='comment'>
            <div className='comment-author'>{comment.name}<span>says:</span></div>
            <div className='comment-body'> {comment.body}</div>
            <div className='comment-like-wrapper'>
                <div className='comment-dislike'> dislike: 0</div>
                <div className='comment-like'> like: 0</div>
            </div>

        </div>
    )
}
