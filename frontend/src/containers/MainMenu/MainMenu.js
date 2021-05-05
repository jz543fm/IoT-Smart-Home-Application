import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
// import Button from '@material-ui/core/Button';

import classes from './MainMenu.css';
import LightsMap from '../../components/Lights/LightsMap';
import * as actions from '../../store/actions/index';

// import Sensors from '../Sensors/Sensors';

class MainMenu extends Component {
    state = {
        selected: [],
        color: '000000',
        openSuccessSnackbar: false,
        snackbarSuccessMessage: "",
        openErrorSnackbar: false,
        snackbarErrorMessage: "",
    }

    componentDidMount = () => {
        this.setState({selected: []});
    };

    handleRefreshLights = () => {
        console.log('Refresh!');
        // GET LIGHTS
        this.handleOpenSuccessSnackbar("Refreshed!");
    };

    handleAllOn = () => {
        console.log('All on!');
        // SEND TURN ON ALL
        this.handleOpenSuccessSnackbar("Success!");
    }

    handleAllOff = () => {
        console.log('All off!');
        // SEND TURN OFF ALL
        this.handleOpenSuccessSnackbar("Success!");
    }

    handleTurnOn = () => {
        console.log('Turn on selected! -> [' + this.state.selected + ']');
        this.handleOpenSuccessSnackbar("Success!");
        // SEND TURN ON SELECTED
    }
    
    handleTurnOff = () => {
        console.log('Turn off selected! -> [' + this.state.selected + ']');
        this.handleOpenSuccessSnackbar("Success!");
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
        this.handleOpenSuccessSnackbar("Success!");
        // SEND CHANGE COLOR      
    }

    handleOpenSuccessSnackbar = (message) => {
        this.setState({snackbarSuccessMessage: message});
        this.setState({openSuccessSnackbar : true}); 
    };
    
    handleCloseSuccessSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({openSuccessSnackbar : false});
    };

    handleOpenErrorSnackbar = (message) => {
        this.setState({snackbarErrorMessage: message});
        this.setState({openErrorSnackbar : true}); 
    };
    
    handleCloseErrorSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({openErrorSnackbar : false});
    };

    render () {
        const SnackBars = () => {
            return (
                <div>
                    <Snackbar 
                        open={this.state.openSuccessSnackbar} 
                        autoHideDuration={4000 } 
                        onClose={this.handleCloseSuccessSnackbar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}>
                        <Alert onClose={this.handleCloseSuccessSnackbar} severity="success">
                            {this.state.snackbarSuccessMessage}
                        </Alert>
                    </Snackbar>
                    <Snackbar 
                        open={this.state.openErrorSnackbar} 
                        autoHideDuration={4000 } 
                        onClose={this.handleCloseErrorSnackbar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}>
                        <Alert onClose={this.handleCloseErrorSnackbar} severity="error">
                            {this.state.snackbarErrorMessage}
                        </Alert>
                    </Snackbar>
                </div>
            );
        };
        return (
            <div className={classes.Menu}>
                <LightsMap 
                    refresh={this.handleRefreshLights}
                    lightClicked={this.handleLightClicked}
                    allOn={this.handleAllOn}
                    allOff={this.handleAllOff}
                    handleLightChecked={this.handleLightChecked}
                    handleColorChangeSend={this.handleColorChangeSend}
                    handleTurnOn={this.handleTurnOn}
                    handleTurnOff={this.handleTurnOff}
                />

                <SnackBars />
                {/* <Sensors /> */}
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