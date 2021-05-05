import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Register.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import SignInForm from '../../components/SignIn/SignInForm';
import Button from '@material-ui/core/Button';

class LogIn extends Component {
    state = {
        login: '',
        name: '',
        surname: '',
        password: '',
        passwordAgain: '',
        created: false,
    }

    componentDidMount () {
        this.setState({created: false});
    }

    handleInputChange = ( input, newValue ) => {
        this.setState({[input]: newValue});
    }

    submitHandler = (event) => {
        console.log(this.state.name + ' ' + this.state.surname + ' your account has been created!');
        this.setState({created: true});
    }

    render () { 

        let form = 
        <div>
            <SignInForm 
                handleInputChange={this.handleInputChange}/>
            <p/>
            
            <Button style={{margin : 5}} variant="contained" color="secondary" onClick={this.submitHandler}> Submit </Button>
        </div>

        if (this.props.loading) {
            form = <Spinner/>;
        };

        let authRedirect = null;
        if(this.state.created) {
            authRedirect = <Redirect to="/" />
        }

        return (
            <div className={classes.Auth}> 
            
                {authRedirect}
                <h1>Sign in</h1>
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