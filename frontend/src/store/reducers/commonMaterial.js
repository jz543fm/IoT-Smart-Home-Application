import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    material: null,
    loading: false,
    error: null,
    done: false
};

const start = (state, action) => {
    return updateObject(state, { loading: true});
};

const sendSuccess = (state, action) => {
    return updateObject(state, { loading: false, done: true});
};

const sendFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error});
};

const getMaterialSuccess = (state, action) => {
    return updateObject(state, { loading: false, done: true, material: action.material });
};

const getMaterialFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error} );
};

const deleteMaterial = (state, action) => {
    return updateObject(state, { material: state.material.filter( item => item.id !== action.itemId) });
};

const sortMaterial = (state, action) => {
    console.log('Sort by: ' + action.column);
    return updateObject(state, { material: state.material.sort((a,b) => a[action.column] - b[action.column]) } );
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START: return start(state, action);
        case actionTypes.SEND_SUCCESS: return sendSuccess(state, action);
        case actionTypes.SEND_FAIL: return sendFail(state, action);
        case actionTypes.GET_MATERIAL_SUCCESS: return getMaterialSuccess(state, action);
        case actionTypes.GET_MATERIAL_FAIL: return getMaterialFail(state, action);
        case actionTypes.DELETE_MATERIAL: return deleteMaterial(state, action);
        case actionTypes.SORT_MATERIAL: return sortMaterial(state, action);
        default:
            return state;
    }
};

export default reducer;