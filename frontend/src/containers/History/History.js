import React, { Component } from 'react';
import { connect } from 'react-redux';

// import classes from './History.css';
import HistoryTable from '../../components/History/HistoryTable';

class Lights extends Component {
    state = {
      logs: [],
    };

    componentWillMount () {
      //get logs
      this.setState({ logs: [] });
    };

    render () {

        return (
            <div>
              <h1 align="center">User Logs</h1>
              <HistoryTable 
                logs={this.state.logs}
              />
            </div>
        );
    };
};

const mapStateToProps = state => {
  return {
      token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Lights);