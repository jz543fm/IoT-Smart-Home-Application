// https://github.com/Martin36/react-gauge-chart
import React from 'react';
import GaugeChart from 'react-gauge-chart';


export default function ShowTemparature( props ) {
        const chartStyle = {
            height: 200,
            width: 250,
          }
        return (
            <div>   
                <h2>Temparature: {props.value}</h2>
                <GaugeChart id="gauge-temparature" 
                    animate={true} 
                    nrOfLevels={10} 
                    percent={((props.value + 15 ) / (70))} 
                    needleColor="#345243" 
                    textColor="#ffffff"
                    colors={["#2ee3ff", "#ff5f2e"]}
                    formatTextValue={value => props.value +' °C'}
                    style={chartStyle}
                />
            </div>
        );
}
