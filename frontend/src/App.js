import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import MainMenu from './containers/MainMenu/MainMenu';
import LogIn from './containers/LogIn/LogIn';
import Sensors from './containers/Sensors/Sensors';
// import Sensors from './containers/Sensors/Sensors2';
import Lights from './containers/Lights/Lights';
import History from './containers/History/History';
import LogOut from './containers/LogIn/LogOut/LogOut';
import SignIn from './containers/Register/Register';
import * as actions from "./store/actions/index";

class App extends Component {
  
  componentDidMount () {
    this.props.onTryAutoSignup();
  };

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/signIn" exact component={SignIn} />
        <Redirect to="/"/>
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/main" exact component={MainMenu} />
          <Route path="/sensors" exact component={Sensors} />
          <Route path="/lights" exact component={Lights} />
          <Route path="/history" exact component={History} />
          <Route path="/logout" exact component={LogOut} />
          <Redirect to="/"/>
        </Switch>
      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !==null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
