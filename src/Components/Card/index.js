import React from "react";
import style from "./Card.module.css";
import card from "../../images/card.png";

const Card = (props) => {
  console.log("Props", props)
  return (
    <div className={style.card_wrapper}>
      <img src={props?.items?.imgeIcon} alt="card" />
      <h4>{props?.items?.name}</h4>
      <p>{props?.items?.description}</p>
    </div>
  );
};

export default Card;
