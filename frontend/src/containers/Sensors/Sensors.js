import React, { Component } from 'react';
import { connect } from 'react-redux';

import img from '../../assets/images/sensorsMap.png';
import AllSensors from '../../components/Sensors/AllSensors';


class Sensors extends Component {


    render () {
        const imageStyle = {
            display: 'block',
            width: 650,
            marginLeft: 'auto',
            marginRight: 'auto',
          };

        return (
        <div>
            <h1 align="center">Sensors</h1>
            <img style={imageStyle} src={img} alt="sensors" />
            <AllSensors />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    };
};

export default connect(mapStateToProps)(Sensors);