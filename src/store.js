import createStore from 'redux-zero';
import data from './data.js';

const initialState = {
    user:'',
    boards:[]
}

const store = createStore(initialState);
export default store; 