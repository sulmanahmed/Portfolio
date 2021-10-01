import React, { useState } from "react";
import style from "./Client.module.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/1mg3.png";
import img4 from "../../images/img4.png";

const Client = () => {
  const [activeTab, setActiveTab] = useState("img2");

  const handleImg2 = () => {
    setActiveTab("img2");
  };
  const handleImg4 = () => {
    setActiveTab("img4");
  };
  const handleImg1 = () => {
    setActiveTab("img1");
  };
  const handleImg3 = () => {
    setActiveTab("img3");
  };
  const handleImg5 = () => {
    setActiveTab("img5");
  };
  const handleImg6 = () => {
    setActiveTab("img6");
  };

  return (
    <section className={style.client}>
      <div className="container">
        <div className={style.client_txt}>
          <h1>What My Client Says</h1>
          <div className={style.client_line}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={style.client_portfolio}>
          <div className={style.client_imgs}>
            <img
              src={img2}
              className={`${activeTab === "img2" ? "active" : ""} ${
                style.img1
              }`}
              onClick={handleImg2}
              alt="img1"
            />
            <img
              src={img4}
              className={`${activeTab === "img4" ? "active" : ""}  ${
                style.img2
              }`}
              onClick={handleImg4}
              alt="img2"
            />
            <img
              src={img1}
              className={`${activeTab === "img1" ? "active" : ""} ${
                style.img3
              }`}
              onClick={handleImg1}
              alt="img3"
            />
            <img
              src={img3}
              className={`${activeTab === "img3" ? "active" : ""} ${
                style.img4
              }`}
              onClick={handleImg3}
              alt="img4"
            />
            <img
              src={img2}
              className={`${activeTab === "img5" ? "active" : ""} ${
                style.img5
              }`}
              onClick={handleImg5}
              alt="img5"
            />
            <img
              src={img1}
              className={`${activeTab === "img6" ? "active" : ""} ${
                style.img6
              }`}
              onClick={handleImg6}
              alt="img6"
            />
          </div>
          <div className={style.client_data}>
            {(() => {
              switch (activeTab) {
                case "img2":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>- Sara Smith</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                case "img4":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>-Muneeb Khan</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                case "img1":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>- Hamza Asif</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                case "img3":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>- Abdullah Rasheed</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                case "img5":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>- Naqash Ahmed</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                case "img6":
                  return (
                    <>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt is the most
                        explicabo.{" "}
                      </p>
                      <h3>- Butt Sab</h3>
                      <h5>CEO ABC Company</h5>
                    </>
                  );
                default:
                  return activeTab;
              }
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
