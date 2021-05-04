import * as actionTypes from './actionTypes';

// import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token, operator) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        operator: operator,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    // time is in ms
    console.log('Logged in for '+ expirationTime/60000 + ' min.');
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime)
    }
}

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart());
        dispatch(authSuccess('token'));
        // dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(checkAuthTimeout(1800000));
        // axios.post('/sessions', authData)
        // .then(response => {
        //     // console.log(response);
        //     dispatch(authSuccess(response.data.token, response.data.operator));
        //     // dispatch(checkAuthTimeout(response.data.expiresIn));
        //     dispatch(checkAuthTimeout(1800000));
        // })
        // .catch(err => {
        //     // console.log(err.response.data.error);
        //     dispatch(authFail(err.response.data.error));   
        // });
    };
};
