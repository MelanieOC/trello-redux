import createStore from 'redux-zero';
import data from './data.js';

const initialState = {
    user:'user',
    boards:[]
}

const store = createStore(initialState);
export default store; 