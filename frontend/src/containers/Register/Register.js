import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

import classes from './Register.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import SignInForm from '../../components/SignIn/SignInForm';
import Button from '@material-ui/core/Button';
import axios from '../../axios-backend';

class LogIn extends Component {
    state = {
        firstname: '',
        lastName: '',
        email: '',
        adress: '',
        zipCode: '',
        password: '',
        passwordAgain: '',
        created: false,
        showError: false,
        errorMessage: "",
    }

    componentDidMount () {
        this.setState({
            firstname: '',
            lastName: '',
            email: '',
            adress: '',
            zipCode: '',
            password: '',
            passwordAgain: '',
            created: false,
            showError: false,
            errorMessage: "",
        });

    }

    handleInputChange = ( input, newValue ) => {
        this.setState({[input]: newValue});
    }

    handlePostRegister = () => {
        const postData = {
            firstName: this.state.firstname,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.adress,
            zipCode: this.state.zipCode,
            password: this.state.password,
        };
        console.log(JSON.stringify(postData));
        axios.post('/register', JSON.stringify(postData))
            .then(response => {
                console.log(this.state.name + ' ' + this.state.surname + ' your account has been created!');
                this.setState({created: true});
            })
            .catch(err => {
                this.handleError("Something went wrong!");
                console.log(err);
            });
    }

    handleError = (message) => {
        this.setState({ errorMessage: message });
        this.setState({ showError: true });
    }

    submitHandler = () => {
        this.setState({ showError: false });
        if (this.state.password !== this.state.passwordAgain) {
            this.handleError("Passwords does not match!");
            return;
        };
        if (this.state.password.length < 6) {
            this.handleError("Password is too short!");
            return;
        }


        this.handlePostRegister();
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

        let errorAlert = null;
        if (this.state.showError) {
            errorAlert = <Alert severity="error">{this.state.errorMessage}</Alert>;
        }

        return (
            <div className={classes.Auth}> 
            
                {authRedirect}
                <h1>Sign in</h1>
                {errorAlert}
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