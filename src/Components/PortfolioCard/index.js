import React from "react";
import style from "./PortfolioCard.module.css";

const PortfolioCard = ({ img }) => {
  return (
    <div className={style.portfoliocard}>
      <div className={style.card_wrapper}>
        <img src={img} className={style.img_anim} alt="img" />
        <div className={style.overlay}>
          <div className={style.overlay_text}>
            <h3>Sed ut Perspiciatis</h3>
            <h6>Branding, Web Design</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
