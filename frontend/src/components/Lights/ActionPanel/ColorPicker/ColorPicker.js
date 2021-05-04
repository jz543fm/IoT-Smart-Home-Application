// https://casesandberg.github.io/react-color/
import React, { useState } from 'react'
import { CirclePicker } from 'react-color'

export default function ColorPicker( props) {
    const [color, setColor] = useState('ff0000');

    const handleColorChange = ( newColor) => {
        setColor(newColor);
        props.handleColorChange(color);
    }

    return (
        <div>
            <CirclePicker 
                color={ color }
                onChangeComplete={ (color) => {handleColorChange(color.hex)} }
            />
        </div>
    );
};