import store from './store';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyASoVpVqUcagSmBBDoC0ABtlmOXrmBtuT8",
    authDomain: "trello-fe8ac.firebaseapp.com",
    databaseURL: "https://trello-fe8ac.firebaseio.com",
    projectId: "trello-fe8ac",
    storageBucket: "trello-fe8ac.appspot.com",
    messagingSenderId: "579542162339"
};
firebase.initializeApp(config);

export const addBoard = (value) => {
    let boards = [...store.getState().boards];
    console.log(value);
    boards.push({
        name: value,
        tarjetas: []
    })
    let newBoard = {
        tarjetas: []
    }
    firebase.database().ref('user/' + value).set(newBoard);
    store.setState({
        boards: boards
    })

}
export const addList = (value, list) => {
    let boards = [...store.getState().boards];
    let newList = boards.map(a => {
        if (a.name === list.name) {
            a.tarjetas.push({ card: value, stages: [] });
        }
        return a;
    })
    store.setState({
        boards: newList
    })

}
export const addCard = (value, list, card) => {
    let boards = [...store.getState().boards];
    let newList = boards.map(a => {
        if (a.name === list.name) {
            a.tarjetas.map(b => {
                if (b.card === card) {
                    b.stages.push(value);
                }
                return b;
            });
        }
        return a;
    })
    store.setState({
        boards: newList
    })
}