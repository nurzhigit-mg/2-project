import React from "react";
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home";
import Login from "./components/Header/Login";
import About from "./components/About";
import AboutUs from "./Page/ AboutUs";

function App() {
    return (
        <div className="App">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path={"/aboutUs"} element={<Home/>}/>
                    {/*<Route path={"/"} element={<Home/>}/>*/}
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/all"} element={<AboutUs/>}/>
                </Routes>
            <Footer/>

        </div>
    );
}

export default App;
