import React from "react";
import Form from "../Form/Form";
import ColorList from '../ColorList/ColorList'
import { useColorTool } from "../../hooks/useColorTool";

const ColorTool = () => {

  const [colors, showArchive, addColor, editId, onEditHandler, onArchiveHandler, toggleShowArchive, onSaveHandler, onCancelHandler] = useColorTool();
  const items = colors.filter(el => !el.archieve || showArchive);

  return (
    <div>
      <h1>My Favorite Colors</h1>
      <label>
        Show Archives
        <input
          name="showArchives"
          type="checkbox"
          onChange={toggleShowArchive}
        />
      </label>
      <ColorList items={items}
        editId={editId}
        onArchive={onArchiveHandler}
        onEdit={onEditHandler}
        onSave={onSaveHandler}
        onCancel={onCancelHandler}
      />
      <Form addColorHandler={addColor} />
    </div>
  );
}

export default ColorTool;
