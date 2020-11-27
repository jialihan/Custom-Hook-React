import React from "react";
import ColorItem from '../ColorItem/ColorItem';

const ColorList = ({ items, onArchive }) => {

  const colorList = items.map((el) => {
    return (
      <ColorItem
        color={el}
        key={el.id}
        archive={onArchive}
      />
    );
  });
  return <div>{colorList}</div>;
};

export default ColorList;
