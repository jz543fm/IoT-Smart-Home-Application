import React from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

// app menu items
const navigationItems = ( props ) => (      
    <ul className={classes.NavigationItems}>
        { props.isAuthenticated 
            ? <NavigationItem link="/sensors" exact><h2>Sensors</h2></NavigationItem>
            : null}
        { props.isAuthenticated 
            ? <NavigationItem link="/history"><h2>History</h2></NavigationItem>
            : null}

        { !props.isAuthenticated 
            ? <NavigationItem link="/"><h2>Log In</h2></NavigationItem>
            : <NavigationItem link="/logout"><h2>Log Out</h2></NavigationItem>}
    </ul>
);

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps) (navigationItems);