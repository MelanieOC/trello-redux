import store from '../store/store';
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

export function readBoard(user) {
    firebase.database().ref(user + '/boards').on('value', res => {
        let stages = [];
        res.forEach(snap => {
            const stage = snap.val();
            stages.push(stage);
        })
        store.setState({
            boards: stages,
            loading: false
        })
    })
}
export const addBoard = (value) => {
    let user = store.getState().user;
    let boards = [...store.getState().boards];
    let newBoard = {
        name: value,
        id: boards.length + '-' + value
    }
    firebase.database().ref(user.id + '/boards/' + newBoard.id).set(newBoard)
        .then(() => console.log('nooo'));
}
export const addList = (value, board) => {
    let user = store.getState().user;
    let list = board.list ? board.list : [];
    list.push({ name: value });
    firebase.database().ref(user.id + '/boards/' + board.id + '/list').set(list)
        .then(() => console.log('lol'));

}
export const addCard = (value, board, list) => {
    let user = store.getState().user;
    let newList = board.list.map(item => {
        if (item.name === list) {
            if (item.cards) {
                item.cards.push(value);
            } else {
                item.cards = [value];
            }
        }
        return item;
    });

    firebase.database().ref(user.id + '/boards/' + board.id + '/list').set(newList)
        .then(() => console.log('sip'));

}
export function signUp(firstName, lastName, email, pass, confirm) {
    if (confirm) {
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
            let newuser = {
                firstName, lastName, email, pass
            }
            firebase.database().ref('users/' + user.uid).set(newuser);
            store.setState({
                password: false
            })
        }).catch(e => {
            store.setState({
                password: true
            })
            console.log(e)
        })
    }

}

export function signOut() {
    firebase.auth().signOut();
    store.setState({
        user: '',
        boards: [],
        login: false,
        password: false,
        loading: true
    })
}
export function signIn(user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(e => {
        console.log(e.message)
        store.setState({
            login: true
        })
    })
}
export const auth = () => {
    firebase.auth().onAuthStateChanged(usuario => {
        if (usuario) {
            console.log('si');
            firebase.database().ref('users/' + usuario.uid).once('value').then(res => {
                const fullUserInfo = res.val();
                store.setState({
                    user: {
                        id: 'users/' + usuario.uid,
                        name: fullUserInfo.firstName,
                        lastName: fullUserInfo.lastName
                    }
                })
            })
            readBoard('users/' + usuario.uid);
        } else {
            console.log('no')
        }
    });
}