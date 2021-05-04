import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import MainMenu from './containers/MainMenu/MainMenu';
import LogIn from './containers/LogIn/LogIn';
import Sensors from './containers/Sensors/Sensors';
import Lights from './containers/Lights/Lights';
import History from './containers/History/History';
import LogOut from './containers/LogIn/LogOut/LogOut';

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={LogIn} />
        {/* <Route path="/" exact component={MainMenu} /> */}
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

export default connect(mapStateToProps) (App);

// class App extends Component {
//   render () {
//     // let routes = (
//     //   <Switch>
//     //   <Route path="/" exact component={LogIn} />
//     //   <Route path="/sensors" component={Sensors} />
//     //   <Route path="/lights" component={Lights} />
//     //   <Route path="/main" component={MainMenu} />
//     //   <Route path="/history" component={History} />
//     //   <Route path="/logout" component={LogOut} />
//     //   <Redirect to="/"/>
//     // </Switch>
//     // );

//     let routes = (
//       <Switch>
//         <Route path="/" exact component={LogIn} />
//         <Redirect to="/"/>
//       </Switch>
//     );

//     if (this.props.isAuth) {
//       routes = (
//         <Switch>
//           <Route path="/" exact component={LogIn} />
//           <Route path="/sensors" component={Sensors} />
//           <Route path="/lights" component={Lights} />
//           <Route path="/main" component={MainMenu} />
//           <Route path="/history" component={History} />
          
//           <Redirect to="/"/>
//         </Switch>
//       );
//     }

//     return (
//       <div> 
//         <Layout>
//           {routes}
//         </Layout>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     isAuth: state.auth.token !==null,
//   };
// };

// export default connect(mapStateToProps) (App);
// // export default App;
