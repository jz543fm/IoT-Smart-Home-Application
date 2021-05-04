import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './LogIn.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import LogInForm from '../../components/LogIn/LogInForm';
import LogInButton from '../../components/LogIn/LogInButton';

class LogIn extends Component {
    state = {
        login: '',
        password: ''
    }

    handleInputChange = ( input, newValue ) => {
        this.setState({[input]: newValue});
    }

    submitHandler = (event) => {
        console.log('LogIn as ' + this.state.login + ' with password ' + this.state.password);
        event.preventDefault();
        this.props.onAuth(this.state);  
    }

    render () { 

        let form = 
        <div>
            <LogInForm 
                handleInputChange={this.handleInputChange}/>
            <p/>
            <LogInButton submitHandler={this.submitHandler}/>
        </div>

        if (this.props.loading) {
            form = <Spinner/>;
        };



        let authRedirect = null;
        if(this.props.isAuth) {
            authRedirect = <Redirect to="/main" />
        }

        return (
            <div className={classes.Auth}> 
            
                {authRedirect}
                <h1>Log in</h1>
                {form}
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (UID, password) => dispatch(actions.auth(UID, password)),
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (LogIn);