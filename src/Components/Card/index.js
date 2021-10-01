import React from "react";
import style from "./Card.module.css";
import card from "../../images/card.png";

const Card = () => {
  return (
    <div className={style.card_wrapper}>
      <img src={card} alt="card" />
      <h4>Web Design</h4>
      <p>Get awesome design services from inkyy.com</p>
    </div>
  );
};

export default Card;
