import React, {useEffect, useState} from 'react';
import "./accardion.scss";
import "./media.scss"
import { AiOutlineDown, AiOutlineUp} from "react-icons/ai";
// import { Accordion } from "react-bootstrap";
import book1 from "./img/book1.png"
// import {Link} from "react-router-dom";

const Acardion = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) =>{
        if (selected === i) {
            return selected(null)
        }
        setSelected(i)
    }
    useEffect((i) => {
            setSelected(i)
        },
        [])
    return (
         <div id="accordion">
    <div className="container">
        <h1>Появились вопросы?</h1>

    </div>
             <div className="accordion-block">
                 <div className="accordion-img">
                     <img src={book1} width={277} alt="img" style={{
                         paddingTop: "30px",
                     }}/>
                 </div>
                 <div className="accordion">
                     {
                         data.map((item, i) => (
                             <div className="item">
                                 <hr className="item-line"/>
                                 <div className="title" onClick={() => toggle(i)}>
                                     <h2>{item.question}</h2>
                                     <span>{selected === i ? <AiOutlineUp className="accardion-icons" />: <AiOutlineDown className="accardion-icons" />}</span>
                                 </div>
                                 <div className={
                                     selected === i ? "content show" : "content"
                                 }>{item.answer}</div>

                             </div>
                         ))
                     }
                     <hr className="item-line" style={{
                         marginRight: "30px",
                     }}/>
                 </div>
             </div>
           </div>

    );

};
  const data = [
      {
          question: "Сколько всего насчитывается материала  всего?",
          answer:  "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не",
      },
      {
          question: "Потеряю ли я оставшесея время если перейду на другой до окончания этого?",
          answer:   "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не",
      },
      {
          question: "Могу ли я отказаться от автопродления подписки?",
          answer:   "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не",
      },
      {
          question: "Откуда мне узнавать про новые статьи и курсы?",
          answer:   "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не",
      },
  ]
export default Acardion;
// <Accordion className="mt-5 p-3">
//     <Accordion.Item eventkey="0" className="item">
//         <Accordion.Header>Сколько всего насчитывается материала всего?</Accordion.Header>
//         <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eos?
//         </Accordion.Body>
//     </Accordion.Item>
//
//     <Accordion.Item eventkey="2" className="item">
//         <Accordion.Header>Могу ли я отказаться от автопродления подписки?</Accordion.Header>
//         <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, velit??
//         </Accordion.Body>
//     </Accordion.Item>
//     <Accordion.Item eventkey="3" className="item">
//         <Accordion.Header>Откуда мне узнавать про новые статьи и курсы? lerom15
//         </Accordion.Header>
//         <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quisquam quos tenetur!
//         </Accordion.Body>
//     </Accordion.Item>
// </Accordion>