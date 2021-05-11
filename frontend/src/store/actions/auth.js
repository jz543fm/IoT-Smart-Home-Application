import * as actionTypes from './actionTypes';

import axios from '../../axios-backend';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: "Something went wrong.",
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userEmail');
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    // time is in ms
    console.log('Logged in for '+ expirationTime/60000 + ' min.');
    return dispatch => {
        setTimeout(() => {
            console.log('checkAuthTimeout');
            dispatch(logout());
        }, expirationTime)
    }
}

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart());

        // const token = '';
        // const expirationDate = new Date(new Date().getTime() + 1800000);
        // const email = 'user@mail.com';
        // localStorage.setItem('token', token);
        // localStorage.setItem('expirationDate', expirationDate);
        // localStorage.setItem('userEmail', email);
        // dispatch(authSuccess(token, email));
        // dispatch(checkAuthTimeout(1800000));


        // console.log(authData);
        axios.post('/login',
            JSON.stringify(authData)
        )
        .then(response => {
            console.log(response);
            const expirationDate = new Date(new Date().getTime() + 1800000);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userEmail', response.data.email);
            dispatch(authSuccess(response.data.token, response.data.email));
            dispatch(checkAuthTimeout(1800000));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail());   
        });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const mail = localStorage.getItem('userMail');
                dispatch(authSuccess(token, mail));
                dispatch(checkAuthTimeout(1800000));
            }
        }
    };
};
