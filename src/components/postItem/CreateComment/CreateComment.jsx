import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pushNewComment } from '../../actions/posts'
import './createComment.scss'

export default function CreateComment(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const data = { postId: props.id, name: name, body: comment }
        dispatch(pushNewComment(data));
        setName('')
        setComment('')
        props.update()
    }

    return (
        <form onSubmit={handleSubmit} className='create'>
            <label htmlFor="name">Name:</label>
            <input id='name' className='create-name' type="text" placeholder="Type your name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="comment">Comment:</label>
            <input id='comment' className='create-comment' type="textarea" placeholder="Type your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Create comment</button>
        </form>
    )
}
