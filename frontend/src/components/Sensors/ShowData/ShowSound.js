import React from 'react';

export default function ShowSound( props ) {

        return (
            <div style={{padding: 5, textAlign: 'center'}} >   
                <h2>Sound:</h2>
                <p/><p/>
                <h2>{props.value} dB</h2>
            </div>
        );
}
