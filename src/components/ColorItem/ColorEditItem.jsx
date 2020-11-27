import React from "react";
import { useForm } from "../../hooks/useForm";
import "./ColorItem.css";
const ColorEditItem = ({ color, save, cancel }) => {

    const [formState, inputChangedHandler] = useForm({
        name: "",
        hex: ""
    });

    return (
        <div className="main">
            <label>{color.name} :</label>
            {color.hex}
            <div className="Input">
                <label className="Label">Color</label>
                <input name="name" type="text" onChange={inputChangedHandler}></input>
            </div>
            <div className="Input">
                <label className="Label">Hex</label>
                <input type="text" name="hex" onChange={inputChangedHandler}></input>
            </div>
            <button
                className="Cancel"
                onClick={() => cancel()}
            >
                Cancel
      </button>
            <button
                className="Save"
                onClick={() => save({ ...color, ...formState })}
            >
                Save
      </button>
        </div>
    );
};

export default ColorEditItem;
