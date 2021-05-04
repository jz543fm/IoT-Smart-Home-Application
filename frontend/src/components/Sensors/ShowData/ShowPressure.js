// https://github.com/Martin36/react-gauge-chart
import React from 'react';
import GaugeChart from 'react-gauge-chart'


export default function ShowPressure( props ) {
        const chartStyle = {
            height: 100,
            width: 100,
          }
        return (
            <div>   
                <h2>Pressure: {props.value}</h2>
                <GaugeChart id="gauge-temparature" 
                    animate={true} 
                    nrOfLevels={15} 
                    percent={0.56} 
                    needleColor="#345243" 
                    textColor="#ffffff"
                    formatTextValue={value=>value+' °C'}
                    style={chartStyle}
                />
            </div>
        );
}
