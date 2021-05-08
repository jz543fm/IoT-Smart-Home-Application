import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Temparature from './ShowData/ShowTemparature';
import Light from './ShowData/ShowLight';
import Pressure from './ShowData/ShowPressure';
import Humidity from './ShowData/ShowHumidity';
import Sound from './ShowData/ShowSound';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 215,
      width: 240,
      background: "#cccccc",
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function AccordionCard( props ) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            <Grid key={'temparature'} item>
              <Paper className={classes.paper}>
                <Temparature value={props.temparatureValue}/>
              </Paper>
            </Grid>
            <Grid key={'light'} item>
              <Paper className={classes.paper}>
                <Light value={props.lightValue}/>
              </Paper>
            </Grid>
            <Grid key={'pressure'} item>
              <Paper className={classes.paper}>
                <Pressure value={props.pressureValue}/>
              </Paper>
            </Grid>
            <Grid key={'humidity'} item>
              <Paper className={classes.paper}>
                <Humidity value={props.humidityValue}/>
              </Paper>
            </Grid>
            <Grid key={'sound'} item>
              <Paper className={classes.paper}>
                <Sound value={props.soundValue}/>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
