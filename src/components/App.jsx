import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import './app.scss'

const App = () => {
    const dispatch = useDispatch()    

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>                    
                <Route path="/" element={<Main/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App