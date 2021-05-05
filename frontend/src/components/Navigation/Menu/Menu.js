import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

  const handleSignIn = () => {
    history.push('/signIn');
  }

  const handleLogIn = () => {
    history.push('/');
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IoT Smarthome
          </Typography>
          <Button color="inherit" onClick={handleLogIn}>Log in</Button>
          <Button color="inherit" onClick={handleSignIn}>Sign in</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
