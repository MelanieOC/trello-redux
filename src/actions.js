import store from './store';
import firebase from 'firebase';
import { storage } from 'firebase';

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
export function readBoard() {
    let user = store.getState().user;
    firebase.database().ref(user + '/boards').on('value', res => {
        let stages = []
        res.forEach(snap => {
            const stage = snap.val();
            stages.push(stage);
        })
        console.log(stages);
        store.setState({
            boards: stages
        })
    });
}
export const addBoard = (value) => {
    let user = store.getState().user;
    let boards = [...store.getState().boards];
    console.log(value);
    let newBoard = {
        name: value,
        id: boards.length + '-' + value
    }
    firebase.database().ref(user + '/boards/' + newBoard.id).set(newBoard).then(() => console.log('nooo'));
}
export const addList = (value, list) => {
    let user = store.getState().user;
    let tarjetas = list.tarjetas ? list.tarjetas : [];
    tarjetas.push({ card: value });
    firebase.database().ref(user + '/boards/' + list.id + '/tarjetas').set(tarjetas).then(() => console.log('lol'));

}
export const addCard = (value, list, card) => {
    let user = store.getState().user;
    let newList = list.tarjetas.map(b => {
        if (b.card === card) {
            if (b.stages) {
                b.stages.push(value);
            } else {
                b.stages = [value];
            }
        }
        return b;
    });

    firebase.database().ref(user + '/boards/' + list.id + '/tarjetas').set(newList).then(() => console.log('sip'));

}