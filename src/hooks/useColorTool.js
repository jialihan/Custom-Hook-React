import React, { useState } from 'react'


export const useColorTool = () => {

    const [colors, setColors] = useState([]);
    const [showArchive, setShowArchive] = useState(false);
    const [editId, setEditId] = useState(-1);

    const addColor = (color) => {
        const newColors = [...colors, {
            ...color,
            archieve: false,
            id: Math.max(...colors.map(el => el.id), 0) + 1
        }];
        setColors(newColors);
    };
    const onEditHandler = (colorId) => {
        console.log("new editid=", colorId);
        setEditId(colorId);
    }

    const onArchiveHandler = (colorId) => {
        // find index
        const index = colors.findIndex(el => el.id === colorId);
        const newColors = [...colors];
        newColors[index] = { ...newColors[index], archieve: true };
        setColors(newColors);
    };

    const toggleShowArchive = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setShowArchive(true);
        }
        else {
            setShowArchive(false);
        }
    };

    const onSaveHandler = (color) => {
        const newColors = [...colors];
        newColors[editId] = { ...newColors[editId], ...color };
        setColors(newColors);
        setEditId(-1);
    }
    const onCancelHandler = (colorId) => {
        setEditId(-1);
    }


    return [colors, showArchive, addColor, editId, onEditHandler, onArchiveHandler, toggleShowArchive, onSaveHandler, onCancelHandler];
}
