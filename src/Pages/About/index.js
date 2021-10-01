import React from 'react'
import style from "./About.module.css"
import { Link } from "react-router-dom";
import aboutimg from "../../images/about.png";
import Button from "../../Components/Button";

const About = () => {
    return (
        <section className={style.about}>
        <div className="container">
          <div className={style.about_wrapper}>
            <div className={style.about_content}>
              <div className={style.about_flex}>
                <h1>About Me</h1>
                <div className={style.line}></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to="/">
                <Button text="Download CV" />
              </Link>
            </div>
            <div className={style.about_img}>
              <img src={aboutimg} alt="aboutimg" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
