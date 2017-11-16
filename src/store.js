import createStore from 'redux-zero';
import data from './data.js';

const initialState = {
    boards: data
}

const store = createStore(initialState);
export default store; 