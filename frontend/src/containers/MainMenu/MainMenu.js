import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import classes from './MainMenu.css';
import LightsMap from '../../components/Lights/LightsMap';
import axios from '../../axios-backend';

class MainMenu extends Component {
    state = {
        selected: [],
        color: 'FFFFFF',
        openSuccessSnackbar: false,
        snackbarSuccessMessage: "",
        openErrorSnackbar: false,
        snackbarErrorMessage: "",
    }

    componentDidMount = () => {
        this.setState({selected: []});
    };

    handleGetLights = () => {
        // GET LIGHTS
    };

    handleRefreshLights = () => {
        console.log('Refresh!');

        this.handleGetLights();
        this.handleOpenSuccessSnackbar("Refreshed!");
    };

    handleAllOn = () => {
        console.log('All on!');
        // this.handleOpenSuccessSnackbar("Success!");
        // SEND TURN ON ALL
        axios.get('/api/rest/lights/all-on')
            .then(response => {
                console.log('Success!');
                this.handleOpenSuccessSnackbar("Success!");
                this.handleGetLights();
            })
            .catch(err => {
                console.log('Error:');
                console.log(err);
                this.handleOpenErrorSnackbar("Error!");
        });   
    };

    handleAllOff = () => {
        console.log('All off!');
        this.handleOpenSuccessSnackbar("Success!");
        // SEND TURN OFF ALL
        axios.get('/api/rest/lights/all-off')
            .then(response => {
                console.log('Success!');
                this.handleOpenSuccessSnackbar("Success!");
                this.handleGetLights();
            })
            .catch(err => {
                console.log('Error:');
                console.log(err);
                this.handleOpenErrorSnackbar("Error!");
        });
    }

    handleTurnOn = () => {
        console.log('Turn on selected! -> [' + this.state.selected + ']');
        this.handleOpenSuccessSnackbar("Success!");
        // SEND TURN ON SELECTED
        this.setState({selected: []});
    }
    
    handleTurnOff = () => {
        console.log('Turn off selected! -> [' + this.state.selected + ']');
        this.handleOpenSuccessSnackbar("Success!");
        // SEND TURN OFF SELECTED
        this.setState({selected: []});
    }

    handleLightChecked = ( lightId ) => {
        console.log('Checked: ' + lightId + '!');
        if (this.state.selected.includes(lightId)){
            // this.setState({ selected: 
            //     this.state.selected.filter( (x) => { return x } )
            // });
        } else {
            this.state.selected.push(lightId);
        }
    }

    handleColorChangeSend = (newColor) => {
        this.setState({color: newColor});
        console.log('Color changed from #' + this.state.color + ' to #' + newColor + ' !');
        console.log('Change color of [' + this.state.selected + '] to color #' + newColor); 
        this.setState({selected: []});
        // this.handleOpenSuccessSnackbar("Success!");
        // SEND CHANGE COLOR  
        axios.post('/api/change/color',
            // NEW COLORS
        )
            .then(response => {
                console.log('Success!');
                this.handleOpenSuccessSnackbar("Success!");
            })
            .catch(err => {
                console.log('Error:');
                console.log(err);
                this.handleOpenErrorSnackbar("Error!");
            });  
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
                    allOn={this.handleAllOn}
                    allOff={this.handleAllOff}
                    handleLightChecked={this.handleLightChecked}
                    handleColorChangeSend={this.handleColorChangeSend}
                    handleTurnOn={this.handleTurnOn}
                    handleTurnOff={this.handleTurnOff}
                />

                <SnackBars />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    };
};

export default connect(mapStateToProps)(MainMenu);