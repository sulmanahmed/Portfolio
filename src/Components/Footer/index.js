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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
          <small>NY / +1 123456 7890 / hello@graphics.studio.com</small>
          <div className={style.icons}>
            <Link to="/">Bē</Link>
            <Link to="/">
              <SportsSoccerIcon />
            </Link>
            <Link to="/">
              <InstagramIcon />
            </Link>
            <Link to="/">
              <LinkedInIcon />
            </Link>
            <Link to="/">
              <PinterestIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <p>Copyright © 2019 Graphics Studio | All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
