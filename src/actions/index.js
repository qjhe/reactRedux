import axios from 'axios';
import { INCREMENT, DECREMENT } from '../constants';
import { LOAD_LOGIN } from '../constants';

export const increment = () => {
    return {
        type: INCREMENT,
        index: 0,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
        index: 1,
    };
};

export const get_user = (searchData) => {
    return {
        type: LOAD_LOGIN,
        payload: {
            promise: axios.get(`http://newsapi.gugujiankong.com/Handler.ashx?${searchData}`)
        }
    };
};
