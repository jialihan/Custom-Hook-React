import React from "react";
import Form from "../Form/Form";
import ColorList from '../ColorList/ColorList'
import { useState } from "react";

const ColorTool = () => {

  const [colors, setColors] = useState([]);
  const [showArchive, setShowArchive] = useState(false);

  const addColor = (color) => {
    const newColors = [...colors, {
      ...color,
      id: Math.max(...colors.map(el => el.id), 0) + 1
    }];
    setColors(newColors);
  };

  const onArchiveHandler = (colorId) => {
    // find index
    const index = colors.findIndex(el => el.id === colorId);
    const newColors = [...colors];
    newColors[index] = { ...newColors[index], archieve: true };
    setColors(newColors);
  };

  const handleShowArchive = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setShowArchive(true);
    }
    else {
      setShowArchive(false);
    }
  };

  const items = colors.filter(el => !el.archieve || showArchive);

  return (
    <div>
      <h1>My Favorite Colors</h1>
      <label>
        Show Archives
        <input
          name="showArchives"
          type="checkbox"
          onChange={handleShowArchive}
        />
      </label>
      <ColorList items={items} onArchive={onArchiveHandler} />
      <Form addColorHandler={addColor} />
    </div>
  );
}

export default ColorTool;
