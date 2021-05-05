import React from 'react';

export default function ShowLight( props ) {
    const color = "#bbb";
    const dotStyle = {
        height: 50,
        width: 50,
        backgroundColor: color,
        borderRadius: "50%",
        display: "inline-block",
    }
    return (
        <div  style={{padding: 5, textAlign: 'center'}} >  
            <h2>Light:</h2>
            <p/><p/>
            <h2>{props.value} lumen</h2>
            <span style={dotStyle} >
            
            </span>
        </div>
    );
}
