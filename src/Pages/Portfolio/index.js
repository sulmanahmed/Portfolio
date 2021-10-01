import React, { useState } from "react";
import style from "./Portfolio.module.css";
import PortfolioCard from "../../Components/PortfolioCard";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";
import card6 from "../../images/card6.png";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleAll = () => {
    setActiveTab("all");
  };
  const handleLogo = () => {
    setActiveTab("logo");
  };
  const handleWebsites = () => {
    setActiveTab("websites");
  };
  const handleMobile = () => {
    setActiveTab("mobile");
  };
  return (
    <section className={style.portfolio}>
      <div className="container">
        <div className={style.portfolio_wrapper}>
          <div className={style.portfolio_content}>
            <h1>Portfolio</h1>
            <nav>
              <ul className={style.nav_links}>
                <li
                  className={`${activeTab === "all" ? "active" : ""}`}
                  onClick={handleAll}
                >
                  All
                </li>
                <li
                  className={`${activeTab === "logo" ? "active" : ""}`}
                  onClick={handleLogo}
                >
                  Logo
                </li>
                <li
                  className={`${activeTab === "websites" ? "active" : ""}`}
                  onClick={handleWebsites}
                >
                  Websites
                </li>
                <li
                  className={`${activeTab === "mobile" ? "active" : ""}`}
                  onClick={handleMobile}
                >
                  Mobile Apps
                </li>
              </ul>
            </nav>
          </div>
          {(() => {
            switch (activeTab) {
              case "all":
                return (
                  <div className={style.portfolio_cards}>
                    <PortfolioCard img={card1} />
                    <PortfolioCard img={card2} />
                    <PortfolioCard img={card3} />
                    <PortfolioCard img={card4} />
                    <PortfolioCard img={card5} />
                    <PortfolioCard img={card6} />
                  </div>
                );
              case "logo":
                return (
                  <div className={style.portfolio_cards}>
                    <PortfolioCard img={card1} />
                    <PortfolioCard img={card2} />
                  </div>
                );
              case "websites":
                return (
                  <div className={style.portfolio_cards}>
                    <PortfolioCard img={card3} />
                    <PortfolioCard img={card4} />
                  </div>
                );
              case "mobile":
                return (
                  <div className={style.portfolio_cards}>
                    <PortfolioCard img={card5} />
                    <PortfolioCard img={card6} />
                  </div>
                );
              default:
                return activeTab;
            }
          })()}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
