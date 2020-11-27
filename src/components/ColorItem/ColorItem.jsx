import React from "react";
import "./ColorItem.css";
const ColorItem = ({ color, archive }) => {
  console.log("color item:", color);
  return (
    <div className="main">
      <label>{color.name} :</label>
      {color.hex}
      <button
        className="Archive"
        onClick={() => archive(color.id)}
      // onClick={archive.bind(this, color.id)}
      >
        archive
      </button>
    </div>
  );
};

export default ColorItem;
