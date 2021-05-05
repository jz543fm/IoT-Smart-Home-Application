// import React from 'react';

// export default function ShowPressure( props ) {

//         return (
//             <div  style={{padding: 5, textAlign: 'center'}} >   
//                 <h2>Pressure:</h2>
//                 <p/><p/>
//                 <h2>{props.value} hPa</h2>
//             </div>
//         );
// }
// https://github.com/Martin36/react-gauge-chart
import React from 'react';
import GaugeChart from 'react-gauge-chart';


export default function ShowPressure( props ) {
        const min = 950;
        const max = 1050;
        const chartStyle = {
            height: 200,
            width: 235,
        }
        return (
            <div  style={{padding: 5, textAlign: 'center'}} >   
                <h2>Pressure:</h2>
                <GaugeChart id="gauge-temparature" 
                    animate={true} 
                    nrOfLevels={3} 
                    percent={((props.value - min ) / (-min + max))} 
                    needleColor="#345243" 
                    textColor="#ffffff"
                    colors={["#55ff00", "#ff0000"]}
                    formatTextValue={value => props.value +' hPa'}
                    style={chartStyle}
                />
            </div>
        );
}

