import { INCREMENT, DECREMENT } from '../constans';

const increment = () => {
    return {
        type: INCREMENT,
        index: 0,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
        index: 1,
    };
};

export { increment, decrement };