import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

import { CirclePicker } from 'react-color'

const useStyles = makeStyles((theme) => ({
buttonDiv: {
  '& > *': {
    margin: theme.spacing(1),
  },
},
}));

export default function DiscreteSlider( props ) {
  const classes = useStyles();
  const [color, setColor] = useState('ff0000');
  const [duration, setDuration] = useState(500);

  const handleColorChange = () => {
    props.handleColorChangeSend(color, duration);
  }

  const ColorPicker = () => {
    return (
      <CirclePicker 
      color={ color }
      onChangeComplete={ (color) => {setColor(color.hex)} }
  />
    );
  };

  const handleDurationChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    if (newValue < 1000000) {
      setDuration(newValue);
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <h2>Action panel</h2>  
      </Grid>
      <Grid item xs={3}>
        <div className={classes.buttonDiv}>
          <Button variant="contained" onClick={props.handleTurnOn} >Turn On</Button>
          <Button variant="contained" onClick={props.handleTurnOff} >Turn Off</Button>
        </div>
      </Grid> 
      <Grid item xs={3}>
        <h3>Choose your color:</h3>
        <ColorPicker />
        

      </Grid>  
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item >
        <FormControl>
          <Input
            id="standard-adornment-weight"
            value={duration}
            onChange={handleDurationChange}
            endAdornment={<InputAdornment position="end">ms</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Duration</FormHelperText>
        </FormControl>
        </Grid> 
        <Grid item>
          <div className={classes.buttonDiv}>
            <Button variant="contained" onClick={handleColorChange} >Change</Button>
          </div>
        </Grid> 
      </Grid> 
    </Grid> 
  );
}




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// import ColorPicker from './ColorPicker/ColorPicker';

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SimplePopover( props ) {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
//         Open Popover
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <Typography component={'span'} className={classes.typography}>
//           <ColorPicker 
//             handleColorChange={props.handleColorChange}
//           />
//         </Typography>
//       </Popover>
//     </div>
//   );
// }

