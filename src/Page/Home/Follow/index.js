import React from 'react';
import "./follow.scss"
import "./media.scss"
import follow2 from "./img/follow2.png"
import follow1 from "./img/follow1.png"

const Follow = () => {
    return (
        <div id="follow">
            <div className="container">
                <div className="follow">
                    <img src={follow1} width={150} className="img1" alt=""/>
                    <img src={follow2} width={90} className="img2" alt=""/>
                      <div className="follow--one">
                          <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                          <p>И получи доступ ко всем нашим материалам и <br/>
                              начинай развиватся сейчас вместе со всеми</p>
                      </div>
                      <div className="follow--two">
                          <button className="follow--two__btn1">Подписаться</button>
                          <button className="follow--two__btn2">Узнать больше</button>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default Follow;