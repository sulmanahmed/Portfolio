import React from "react";
import style from "./Form.module.css"
import Button from "../Button"

const Form = () => {
  return (
    <div>
      <form className={style.form_inline}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="tel" name="phone" id="phone" placeholder="Phone" />
         <select id="Budget" name="Budget">
          <option value="budget">Budget</option>
          <option value="budget1">Budget1</option>
          <option value="budget2">Budget2</option>
        </select>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea> 
        <Button text="Hire Me" />
      </form>
    </div>
  );
};

export default Form;
