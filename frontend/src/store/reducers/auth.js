import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
    token: null,
    user: "",
    loading: false,
};

const authStart = (state, action) => {
    return updateObject( state, { loading: true });
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        user: action.user,
        loading: false,
     });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null});
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;