import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../components/Pages/Home";
import LoginPage from "../components/Pages/Login";
import HeaderPage from "../components/UI/Header";

const RouteList = (props) => {
    const userData = localStorage.getItem('userDetails');
    console.log("88", userData);
    return(
    <>
    <BrowserRouter>
    <HeaderPage />
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={<HomePage />}  />
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default RouteList;
