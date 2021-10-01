import React from "react";
import Form from "../../Components/Form";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact}>
      <div className="container">
        <div className={style.contact_txt}>
          <div className={style.contact_line}></div>
          <h1>Let’s Make Something Great Together</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={style.contact_form}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
