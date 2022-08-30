import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import aboutimg from "../../images/about.png";
import Button from "../../Components/Button";
import CV from "../../images/Sr_Reactjs_Sulman_Ahmed.pdf";

const About = () => {
  return (
    <section className={style.about} id = "about">
      <div className="container">
        <div className={style.about_wrapper}>
          <div className={style.about_content}>
            <div className={style.about_flex}>
              <h1>About Me</h1>
              <div className={style.line}></div>
            </div>
            <p>
              3+ years experienced React Developer with hands-on experience in
              identifying web-based user interactions along with designing &
              implementing highly-responsive user interface components by
              deploying React concepts. Proficient in translating designs &
              wireframes into high-quality code, and writing application
              interface code via Javascript and ReactJS workflows. Adept at
              monitoring & maintaining frontend performance and troubleshooting
              & debugging the same to bolster overall performance.
            </p>

            {/* <Link to="/">
              <Button text="Download CV" />
            </Link> */}
            <a href={CV} download target="_blank">
              <Button text="Download CV" />
            </a>
          </div>
          <div className={style.about_img}>
            <img src={aboutimg} alt="aboutimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
