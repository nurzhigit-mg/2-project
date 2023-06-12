import React from 'react';
import "../About/about.scss"
import "../About/aboutMedia.scss"
import el from "../../Backend";
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="btns">
                    <div>
                        <button className="btn">Все разделы</button>
                    </div>
                    <div>
                        <Link to={"/all"}><button className="btn2">Новое</button></Link>
                    </div>
                    <div>
                        <button  className="btn3">Софт-скилс</button>
                    </div>
                    <div>
                        <button className="btn4">Книги</button>
                    </div>
                    <div>
                        <button className="btn5">Окружение</button>
                    </div>
                </div>
                <div className="about">
                    <div className="about--block">
                        <div className="about--block__block2">
                                <h2>{el.title}</h2>
                                <div className="about--block__block2--block3">
                                    <h4>{el.title2}</h4>
                                    <div>
                                        <button className="one">Все</button>
                                        <button className="two">Новое</button>
                                        <button className="three">Книги</button>
                                    </div>
                                </div>

                                <img src={el.image} alt=""/>
                                <hr/>
                                <div className="about--block__block2--title">
                                    <h5>{el.title3}</h5>
                                    <h5 className="h5">{el.title4}</h5>

                                </div>

                        </div>
                        <div className="about--block__block2">
                            <h2>{el.title}</h2>
                            <div className="about--block__block2--block3">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>
                        <div className="about--block__block2">
                            <h2>{el.title}</h2>
                            <div className="about--block__block2--block3">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>

                    </div>
                    <div className="about--block">
                        <div className="about--block__block5">
                            <h2>{el.title}</h2>
                            <div className="about--block__block5--block6">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>

                        <div className="about--block__block3">
                            <h2>{el.title}</h2>
                            <div className="about--block__block3--block4">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <img src={el.img} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>

                    </div>
                    <div className="about--block">
                        <div className="about--block__block2">
                            <h2>{el.title}</h2>
                            <div className="about--block__block2--block3">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>
                        <div className="about--block__block2">
                            <h2>{el.title}</h2>
                            <div className="about--block__block2--block3">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>
                        <div className="about--block__block2">
                            <h2>{el.title}</h2>
                            <div className="about--block__block2--block3">
                                <h4>{el.title2}</h4>
                                <div>
                                    <button className="one">Все</button>
                                    <button className="two">Новое</button>
                                    <button className="three">Книги</button>
                                </div>
                            </div>

                            <img src={el.image} alt=""/>
                            <hr/>
                            <div className="about--block__block2--title">
                                <h5>{el.title3}</h5>
                                <h5 className="h5">{el.title4}</h5>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="button">
                    <Link to={"/all"}><button>Показать болшье</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;