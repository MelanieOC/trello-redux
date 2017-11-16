import createStore from 'redux-zero';

const initialState = {
    boards:[]
}

const store = createStore(initialState);
export default store; 