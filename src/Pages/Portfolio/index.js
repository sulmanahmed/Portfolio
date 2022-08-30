import React, { useState } from "react";
import style from "./Portfolio.module.css";
import PortfolioCard from "../../Components/PortfolioCard";
import Dashboard from "../../images/Dashboard.png";
import Facebook from "../../images/Facebook.png";



const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("websites");

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

  let DetailsArray = [
    {
      name: "Dashboard",
      image: Dashboard,
      description: "Key Features of an application Displaying on Dashboard.",
    },
    {
      name: "Facebook Record",
      image: Facebook,
      description: " Facebook Records.",
    },
    {
      name: "Dashboard",
      image: Dashboard,
      description: "Key Features of an application Displaying on Dashboard.",
    },{
      name: "Dashboard",
      image: Dashboard,
      description: "Key Features of an application Displaying on Dashboard.",
    },{
      name: "Dashboard",
      image: Dashboard,
      description: "Key Features of an application Displaying on Dashboard.",
    },{
      name: "Dashboard",
      image: Dashboard,
      description: "Key Features of an application Displaying on Dashboard.",
    },
  ];
  return (
    <section className={style.portfolio} id = "portfolio">
      <div className="container">
        <div className={style.portfolio_wrapper}>
          <div className={style.portfolio_content}>
            <h1>Portfolio</h1>
            <nav>
              <ul className={style.nav_links}>
                {/* <li
                  className={`${activeTab === "all" ? "active" : ""}`}
                  onClick={handleAll}
                >
                  All
                </li> */}
                {/* <li
                  className={`${activeTab === "logo" ? "active" : ""}`}
                  onClick={handleLogo}
                >
                  Logo
                </li> */}
                <li
                  className={`${activeTab === "websites" ? "active" : ""}`}
                  onClick={handleWebsites}
                >
                  Websites
                </li>
                {/* <li
                  className={`${activeTab === "mobile" ? "active" : ""}`}
                  onClick={handleMobile}
                >
                  Mobile Apps
                </li> */}
              </ul>
            </nav>
          </div>
          {(() => {
            switch (activeTab) {
              case "websites":
                return (
                  <div className={style.portfolio_cards}>
                    {DetailsArray?.map((items, index) => (
                  
                           <PortfolioCard items={items} key = {index}/>
                     
                     
                    ))}
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
