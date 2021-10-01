import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button";
// import Hamburger from "../Hamburger";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <header>
      <div className="container">
        <div className={style.header_wrapper}>
          <Link to="/" className={style.logo}>
            Portfolio
          </Link>
          <div className={style.menu_icon} onClick={toggleHamburger}>
            <i className={hamburgerOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <nav>
            <ul
              className={
                hamburgerOpen
                  ? `${style.nav_links} ${style.active}`
                  : `${style.nav_links}`
              }
            >
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
          <Link to="/" className={style.cta}>
            <Button text="Get Started" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
