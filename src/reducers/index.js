import { combineReducers } from 'redux';

import counter from './counter';

import user from './user';

import login from './login';

const rootReducer = combineReducers({
    counter,
    user,
    login,
});

export default rootReducer;