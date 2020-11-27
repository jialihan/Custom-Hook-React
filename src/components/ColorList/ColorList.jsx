import React from "react";
import ColorItem from '../ColorItem/ColorItem';
import ColorEditItem from '../ColorItem/ColorEditItem'
const ColorList = ({ items, editId, onArchive, onEdit, onSave, onCancel }) => {

  const colorList = items.map((el) => {
    if (el.id === editId) {
      return <ColorEditItem
        color={el}
        key={el.id}
        save={onSave}
        cancel={onCancel}
      />;
    }
    else {
      return (
        <ColorItem
          color={el}
          key={el.id}
          archive={onArchive}
          edit={onEdit}
        />
      );
    }
  });
  return <div>{colorList}</div>;
};

export default ColorList;
