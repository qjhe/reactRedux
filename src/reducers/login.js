import { LOAD_LOGIN_FULFILLED, LOAD_LOGIN_PENDING, LOAD_LOGIN_REJECTED } from '../constants';

const initialState = {
    isFetching: false,
    error: null,
    user: {}
};

const login = (state = initialState, action = {}) => {
    console.log(action);
    switch(action.type) {
        case LOAD_LOGIN_FULFILLED:
            return {
                isFetching: false,
                error: null,
                user: action.payload.data,
            };
        case LOAD_LOGIN_PENDING:
            return {
                isFetching: true,
                error: null,
                user: {},
            };
        case LOAD_LOGIN_REJECTED:
            return {
                isFetching: false,
                error: action.payload.response.data,
                user: {},
            };    
        default: return state;    
    }
};

export default login;