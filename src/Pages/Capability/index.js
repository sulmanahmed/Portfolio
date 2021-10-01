import React from "react";
import style from "./Capability.module.css";
import Card from "../../Components/Card";

const Capability = () => {
  return (
    <section className={style.capability}>
      <div className="container">
        <div className={style.capability_txt}>
          <h1>My Capabilities</h1>
          <div className={style.capability_line}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={style.capability_card}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Capability;
