// https://github.com/Martin36/react-gauge-chart
import React from 'react';
import GaugeChart from 'react-gauge-chart';


export default function ShowTemparature( props ) {
        const min = - 15;
        const max = 50;
        const chartStyle = {
            height: 200,
            width: 235,
        }
        return (
            <div  style={{padding: 5, textAlign: 'center'}} >   
                <h2>Temparature:</h2>
                <GaugeChart id="gauge-temparature" 
                    animate={true} 
                    nrOfLevels={6} 
                    percent={((props.value - min ) / (-min + max))} 
                    needleColor="#345243" 
                    textColor="#ffffff"
                    colors={["#2ee3ff", "#ff5f2e"]}
                    formatTextValue={value => props.value +' °C'}
                    style={chartStyle}
                />
            </div>
        );
}