import React, {useEffect, useState} from 'react';
import "../Header/header.scss"
import logo from "../../img/Kaif 1.png"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {CiUser, } from "react-icons/ci";
import {FaUser} from "react-icons/fa";
const Header = () => {
    const [user,setUser] = useState(true)
    const userOver = () => {
            setUser(true)
        ;
    };const userHover = () => {
            setUser(false)
        ;
    };
const nav = useNavigate()
    useEffect(()=>{
    },[user])
    return (
        <div id="header">
            <div className="header">
                <div className="header--logo">
                    <img src={logo}  width="73px" alt=""/>
                    <h1>SELF DEVELOPING SCHOOL</h1>
                </div>
                <div className="header--link">
                    <NavLink to={"/"}>Главная</NavLink>
                    <NavLink to={"/"}>Наши курсы</NavLink>
                    <NavLink to={"/aboutUs"}>О нас</NavLink>
                </div>
                <div className="header--btn">
                    <Link to={"/login"} style={{
                        textDecoration:"none"
                    }}>
                        <button  onMouseEnter={userHover}
                                 onMouseLeave={userOver}>
                            {
                                user ? <CiUser fontSize={"20px"} style={{marginRight:"  4px"}}/> : <FaUser style={{marginRight:"  4px"}}fontSize={"18px"}/>
                            } Войти</button>
                    </Link>

                </div>
            </div>
            <div className="line"></div>
        </div>

    );
};

export default Header;