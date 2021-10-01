import React from "react";
import style from "./Hamburger.module.css";

const Hamburger = () => {
  return (
    <div className={style.hamburger}>
      <div className={`${style.burger} ${style.burger1}`}></div>
      <div className={`${style.burger} ${style.burger2}`}></div>
      <div className={`${style.burger} ${style.burger3}`}></div>
    </div>
  );
};

export default Hamburger;
