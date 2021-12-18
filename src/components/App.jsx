import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from "./main/Main";
import './app.scss'
import PostItem from "./postItem/PostItem";
import NotFound from "./notFound/NotFound";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/post/:id" element={<PostItem />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App