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

export function readBoard(user) {
    firebase.database().ref(user + '/boards').on('value', res => {
        let stages = [];
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
export function signUp(firstName, lastName, email, pass) {
    //console.log ('signUp' + fullname + email + pass);

    firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        let newuser = {
            firstName, lastName, email
        }
        firebase.database().ref('users/' + user.uid).set(newuser);

        // firebase.database().ref ('users/' + user.uid + '/options').update ( 'option1, option2, option3...');   
        //  firebase.database().ref ('users/').push (newuser);   

        firebase.database().ref('users/' + user.uid).once('value').then(res => {
            const fullUserInfo = res.val();

            console.log('full info ', fullUserInfo);

        })

    })

}

export function signOut() {
    firebase.auth().signOut();
    store.setState({
        user:''
    })
}

export function signIn(user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).then(userObj => {
        console.log(userObj.uid)
        store.setState({
            user: 'users/' + userObj.uid
        })
        firebase.database().ref('users/' + userObj.uid).once('value').then(res => {
            const fullUserInfo = res.val();
            
            console.log('full info ', fullUserInfo);


        })
    }).catch(e => console.log(e.message))
}
export const probando = () => {
    firebase.auth().onAuthStateChanged(usuario => {
        if (usuario) {
            console.log('si');
            store.setState({
                user: 'users/' + usuario.uid
            })
            let useru = store.getState().user;
            console.log(useru);
            readBoard(useru);

        }else{
            console.log('no')
        }
    });
}