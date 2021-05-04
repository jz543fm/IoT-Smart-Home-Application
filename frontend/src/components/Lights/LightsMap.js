import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import { red, green } from '@material-ui/core/colors';

import ActionPanel from './ActionPanel/ActionPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperSmallGreen: {
    textAlign: 'center',
    width: 38,
    height: 60,
    background: green[200],
  },
  paperSmallRed: {
    textAlign: 'center',
    width: 38,
    height: 60,
    background: red[200],
  },
  paperBigGreen: {
    textAlign: 'center',
    width: 125,
    height: 80,
    background: green[200],
  },
  paperBigRed: {
    textAlign: 'center',
    width: 125,
    height: 80,
    background: red[200],
  },
  buttonDiv: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

export default function LightGrid (props) {
  const classes = useStyles();

  const LightClicked = (id) => {
    props.lightClicked(id);
  };

  const handleLightChecked = ( id ) => {
    props.handleLightChecked(id);
  }


  const RoomLightsGird = () => {
      return (
        <Grid 
            container 
            spacing={2}
            direction="column"
            justify="space-between"
            alignItems="baseline"
        >
        {[0,1,2].map((x) =>   
            <Grid container item key={x} >
                <React.Fragment >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27].reverse().map((y) => 
                        <Grid item xs key={(x*27 + y)} >
                          { ((x*27 + y)%2 === 0) ?
                            <Paper onClick={() => LightClicked(x*27 + y)} className={classes.paperSmallGreen}>
                              {(x*27 + y)}
                              <div/>
                              <Checkbox
                                color="default"
                                size="small"
                                onChange={() => handleLightChecked(x*27 + y)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              />
                            </Paper> :
                            <Paper onClick={() => LightClicked(x*27 + y)} className={classes.paperSmallRed}>
                              {(x*27 + y)} 
                              <div/>
                              <Checkbox
                                color="default"
                                size="small"
                                onChange={() => handleLightChecked(x*27 + y)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              />
                            </Paper>
                          }                          
                        </Grid>
                    )}
                </React.Fragment>
            </Grid>
        )}
        </Grid>
      );
  };

  const HallLightsGrid = () => {
    return (
      <Grid 
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={2}
      >
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm 
        >
          <Grid>
            <Paper onClick={() => LightClicked(96)} className={classes.paperBigGreen}>96
            <div/>
                              <Checkbox
                                        color="default"
                                        onChange={() => handleLightChecked(96)}
                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(97)} className={classes.paperBigGreen}>97
            <div/>
                              <Checkbox
                                   color="default"
                                   onChange={() => handleLightChecked(97)}
                                   inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(94)} className={classes.paperBigRed}>94
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(94)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(95)} className={classes.paperBigRed}>95
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(95)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(92)} className={classes.paperBigGreen}>92
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(92)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(93)} className={classes.paperBigGreen}>93
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(93)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(90)} className={classes.paperBigGreen}>90
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(90)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(91)} className={classes.paperBigGreen}>91
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(91)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(88)} className={classes.paperBigGreen}>88
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(88)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(89)} className={classes.paperBigRed}>89
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(89)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(86)} className={classes.paperBigGreen}>86
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(86)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(87)} className={classes.paperBigGreen}>87
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(87)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(84)} className={classes.paperBigGreen}>84
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(84)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(85)} className={classes.paperBigGreen}>85
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(85)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="stretch"
          sm
        >
          <Grid>
            <Paper onClick={() => LightClicked(82)} className={classes.paperBigRed}>82
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(82)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
          <Grid>
            <Paper onClick={() => LightClicked(83)} className={classes.paperBigRed}>83
            <div/>
                              <Checkbox
                                color="default"
                                onChange={() => handleLightChecked(83)}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                              /></Paper>
          </Grid>
        </Grid>


      </Grid>
    );
  };

  return (
    
    <div>
      <div className={classes.buttonDiv}>
        <Button variant="contained" onClick={props.refresh} ><LoopIcon/>Refresh</Button>
        <Button variant="contained" onClick={props.allOn} >All On</Button>
        <Button variant="contained" onClick={props.allOff} >All Off</Button>
      </div>
      <div className={classes.actionPanel}>

          <RoomLightsGird/>
          <p/>
          <Divider />
          <p/>
          <HallLightsGrid/>
          <p/>
          <ActionPanel
            handleColorChangeSend={props.handleColorChangeSend}
            handleTurnOn={props.handleTurnOn}
            handleTurnOff={props.handleTurnOff}
          />
      </div>

    </div>
  );
}
