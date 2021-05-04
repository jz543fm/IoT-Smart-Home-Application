import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MainMenu.css';
// import LightsMap from '../../components/Lights/LightsMap';
import * as actions from '../../store/actions/index';

import Sensors from '../Sensors/Sensors';

class MainMenu extends Component {
    state = {
        selected: [],
        color: '000000',
    }

    componentDidMount = () => {
        this.setState({selected: []});
    };

    handleRefreshLights = () => {
        console.log('Refresh!');
        // GET LIGHTS
    };

    handleAllOn = () => {
        console.log('All on!');
        // SEND TURN ON ALL
    }

    handleAllOff = () => {
        console.log('All off!');
        // SEND TURN OFF ALL
    }

    handleTurnOn = () => {
        console.log('Turn on selected! -> [' + this.state.selected + ']');
        // SEND TURN ON SELECTED
    }
    
    handleTurnOff = () => {
        console.log('Turn off selected! -> [' + this.state.selected + ']');
        // SEND TURN OFF SELECTED
    }

    handleLightClicked = ( lightId ) => {
        // console.log('Clicked: ' + lightId + '!');
    };

    handleLightChecked = ( lightId ) => {
        console.log('Checked: ' + lightId + '!');
        this.state.selected.push(lightId);
    }

    handleColorChangeSend = (newColor) => {
        this.setState({color: newColor});
        console.log('Color changed from #' + this.state.color + ' to #' + newColor + ' !');
        console.log('Change color of [' + this.state.selected + '] to color #' + newColor); 
        this.setState({selected: []});
        // SEND CHANGE COLOR      
    }

    render () {

        return (
            <div className={classes.Menu}>
                {/* <LightsMap 
                    refresh={this.handleRefreshLights}
                    lightClicked={this.handleLightClicked}
                    allOn={this.handleAllOn}
                    allOff={this.handleAllOff}
                    handleLightChecked={this.handleLightChecked}
                    handleColorChangeSend={this.handleColorChangeSend}
                    handleTurnOn={this.handleTurnOn}
                    handleTurnOff={this.handleTurnOff}
                /> */}
                <Sensors />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (UID, password) => dispatch(actions.auth(UID, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);