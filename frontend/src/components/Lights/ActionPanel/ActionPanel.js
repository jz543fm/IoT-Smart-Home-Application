import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

  const handleColorChange = () => {
    props.handleColorChangeSend(color);
  }

  const ColorPicker = () => {
    return (
      <CirclePicker 
      color={ color }
      onChangeComplete={ (color) => {setColor(color.hex)} }
  />
    );
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
      <Grid item xs={3}>
        <div className={classes.buttonDiv}>
          <Button variant="contained" onClick={handleColorChange} >Change</Button>
        </div>
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

