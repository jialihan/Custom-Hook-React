import React, { useState } from 'react'


export const useColorTool = () => {

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

    const toggleShowArchive = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setShowArchive(true);
        }
        else {
            setShowArchive(false);
        }
    };

    return [colors, showArchive, addColor, onArchiveHandler, toggleShowArchive];
}
