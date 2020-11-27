import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ addColorHandler }) => {
  // react engine know which FiberNode we are working on,
  // and retrieves the state from FiberNodE(linkiedin list of states)

  const [formState, inputChangedHandler] = useForm({
    name: "",
    hex: ""
  });


  // const [formState, setFormState] = useState({});
  // const inputChangedHandler = (event) => {
  //   const newState = {
  //     ...formState,
  //     [event.target.name]: event.target.value,
  //   };
  //   setFormState(newState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
    // props.addColorHandler(formState.color, formState.hex);
    addColorHandler({ name: formState.name, hex: formState.hex });
  };

  // foolish way
  // const inputChangedHandler2 = (event) => {
  //   const newState = {
  //     ...formState,
  //     hex: event.target.value,
  //   };
  //   setFormState(newState);
  // };

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
