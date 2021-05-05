import React from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
// material UI imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
// meterial UI icon imports
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PersistentDrawerLeft( props ) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;

  let history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMapClicked = () => {
    // console.log('Map');
    history.push('/main');
  };
  
  const handleSensorsClicked = () => {
    // console.log('Sensors');
    history.push('/sensors');
  };

  const handleHistoryClicked = () => {
    // console.log('History');
    history.push('/history');
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap style={{ flex: 1 }} onClick={handleMapClicked} >
            IoT Smarthome
          </Typography>

          <Button color="inherit" onClick={() => props.logoutUser()}>Logout</Button>

          <AccountCircleIcon onClick={handleClick}/>
          <Popover
            id={id}
            open={open2}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom',horizontal: 'center',}}
            transformOrigin={{vertical: 'top',horizontal: 'center',}}
          >
            <Typography className={classes.typography}>You are loged as {props.userName}</Typography>
          </Popover>
        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
          <List>
            <Tooltip title="Map with lights">
            <ListItem button key={'Map'} onClick={handleMapClicked}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={'Map'} />
            </ListItem>
        </Tooltip>
          <Tooltip title="Sensors in the room">
            <ListItem button key={'Sensors'} onClick={handleSensorsClicked}>
              <ListItemIcon><RssFeedIcon /></ListItemIcon>
              <ListItemText primary={'Sensors'} />
            </ListItem>
          </Tooltip>
          <Tooltip title="Actions history">
            <ListItem button key={'History'} onClick={handleHistoryClicked}>
              <ListItemIcon><HistoryIcon /></ListItemIcon>
              <ListItemText primary={'History'} />
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}
