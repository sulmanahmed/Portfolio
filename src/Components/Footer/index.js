import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className="container">
        <div className={style.footer_txt}>
          <div className={style.footer_line}></div>
          <h1>Portfolio</h1>
          <nav>
            <ul className={style.nav_links}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <small id = "contact">PK / +92 3025469163 / sulmanahmed135@gmail.com</small>
          <div className={style.icons}>
            {/* <Link to="/">Bē</Link>
            <Link to="/">
              <SportsSoccerIcon />
            </Link> */}
            {/* <Link to="/">
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
      </div>
      <div className={style.footer_bottom}>
        <p>Copyright © 2022 Sulman Ahmed | All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
