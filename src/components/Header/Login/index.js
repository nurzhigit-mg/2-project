import React from 'react';
import "../../Header/Login/login.scss"
import book from "../../../img/Kaif 1.png"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div id="login">
            <div className="login">
                <div className="login--block">
                    <img src={book} width={" 136.35px"} alt=""/>
                    <h1>SELF DEVELOPING SCHOOL</h1>
                </div>
                <div className="login--div">
                    <h2>Войти в аккаунт</h2>
                    <input className="email" type="email" id="fname"  placeholder="Email"/>
                    <input className="password" type="password" placeholder="Password"/>
                    <Link to={"/"}><button>Войти</button></Link>
                    <a href="">Забыли пароль?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;