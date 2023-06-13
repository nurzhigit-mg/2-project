import React from 'react';
import "./hero.scss"
import "./media.scss"
import book1 from "./img/book1.png";
import book2 from "./img/book2.png";
import book3 from "./img/book3.png";
import book4 from "./img/book4.png";
import largebook from "./img/largebook.png";

const Hero = () => {
    return (
        <div id="hero">
            <img className="book1" src={book1} alt=""/>
            <img className="book2" src={book2} alt=""/>
            <img className="book3" src={book3} alt=""/>
            <img className="book4" src={book4} alt=""/>
            <div className="container">
                <div className="hero">
                    <div className="hero--title">
                        <h1>Само развитие лучше <br/> чем школьное обучение</h1>
                        <p>Здесь вы найдете все для само-обучения.</p>
                        <button>Подобрать пакет</button>
                    </div>
                    <img  src={largebook} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;