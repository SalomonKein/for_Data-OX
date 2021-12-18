import React from 'react'
import { useNavigate } from 'react-router-dom';
import './notFound.scss'

export default function NotFound() {
    let navigate = useNavigate();
function handleClick() {
        navigate("/");
    }

    return (
        <div className='notfound-wrapper'>
            Page not found
            <button className="item-btn-back" onClick={()=>handleClick()}>Back</button>
        </div>
    )
}
