import React from "react";
import style from "./Banner.module.css";
import { Link } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import bannerimg from "../../images/bannerimg.png";
import Button from "../Button";

const Banner = () => {
  return (
    <section className={style.banner}>
      <div className="container">
        <div className={style.banner_wrapper}>
          <div className={style.banner_content}>
            <p>
              Hello, I am <span>Sulman Ahmed</span>
            </p>
            <small className ={style.smalltxt}>
              A Senior<span> UI/UX </span> React js Developer.
            </small>
            <div className={style.banner_icons}>
              <small>Find Me on</small>
              <div className={style.icons}>
                {/* <Link to="/">Bē</Link>
                <Link to="/">
                  <SportsSoccerIcon />
                </Link>
                <Link to="/">
                  <InstagramIcon />
                </Link> */}
       <a href="https://www.linkedin.com/in/sulman-ahmed-awan-871962b8" target="_blank">
                  <LinkedInIcon />
                </a>
                {/* <Link to="/">
                  <PinterestIcon />
                </Link> */}
              </div>
            </div>
            {/* <div className={style.banner_btns}>
              <Link><Button text="Hire Me" /></Link>
              <Link className={style.portfolio_btn}><Button text="Portfolio"/></Link>
            </div> */}
          </div>
          <div className={style.banner_img}>
            <img src={bannerimg} alt="bannerimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
