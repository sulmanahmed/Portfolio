import React from "react";
import style from "./PortfolioCard.module.css";


const PortfolioCard = (props) => {
  return (
    <div className={style.portfoliocard}>
      <div className={style.card_wrapper}>
        {/* <img src={props?.items?.image} className={style.img_anim} alt="img" /> */}
        {/* <div className={style.overlay}>
          <div className={style.overlay_text}>
            <h3>{props?.items?.name}</h3>
            <h6>{props?.items?.description}</h6>
          </div>
        </div> */}
      
          <img src={props?.items?.image} className={style.img_anim} alt="img" />
          <div className={style.overlay}>
            <div className={style.overlay_text}>
              <h3>{props?.items?.name}</h3>
              <h6>{props?.items?.description}</h6>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default PortfolioCard;
