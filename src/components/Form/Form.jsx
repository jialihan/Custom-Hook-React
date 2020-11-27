import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ addColorHandler }) => {

  // use custom hook
  const [formState, inputChangedHandler] = useForm({
    name: "",
    hex: ""
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
    addColorHandler({ name: formState.name, hex: formState.hex });
  };

  let form = (
    <form onSubmit={submitHandler}>
      <div className="Input">
        <label className="Label">Color</label>
        <input name="name" type="text" onChange={inputChangedHandler}></input>
      </div>
      <div className="Input">
        <label className="Label">Hex</label>
        <input type="text" name="hex" onChange={inputChangedHandler}></input>
      </div>
      <Button btnType="Success">Add Color</Button>
    </form>
  );
  return <div className="main">{form}</div>;
};

export default Form;
