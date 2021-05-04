import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Menu from '../../components/Navigation/Menu/Menu';
// import Drawer from '../../components/Navigation/Drawer/DrawerOld';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import * as actions from '../../store/actions/index';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    // sideDrawerClosedHandler = () => {
    //     this.setState( { showSideDrawer: false } );
    // }

    // sideDrawerToggleHandler = () => {
    //     this.setState( ( prevState ) => {
    //         return { showSideDrawer: !prevState.showSideDrawer };
    //     } );
    // }

    // render () {
    //     return (
    //         <Aux>
    //             <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
    //             <SideDrawer
    //                 open={this.state.showSideDrawer}
    //                 closed={this.sideDrawerClosedHandler} />
    //             <main className={classes.Content}>
    //                 {this.props.children}
    //             </main>
    //         </Aux>
    //     )
    // }

    logoutHandler = () => {
        console.log('Logout');
        this.props.onLogout();
    }

    render () {

        let PageLayout = <Drawer logoutUser={this.logoutHandler} userName={'name@mail.com'}>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Drawer>;

        let Main = null;

        if (!this.props.isAuth) {
            PageLayout = <Menu/>;
            Main =  <main className={classes.Content}>
                        {this.props.children}
                    </main>;
        } 

        return (
            <Aux>
                {PageLayout}
                {Main}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuth: state.auth.token !==null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps) (Layout);