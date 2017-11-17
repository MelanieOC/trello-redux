import store from './store';
//import firebase from 'firebase';

export const addBoard = (value)=>{
    let boards = [...store.getState().boards];
    console.log(value);
    boards.push({
        name: value,
        tarjetas:{

        }
    })
    store.setState({
        boards: boards
    })
}
export const addList = (value,list)=>{
    console.log(value);
    
    let boards = [...store.getState().boards];
    let newList = boards.filter(a=>a.name===list.name);
    console.log(newList);
    
}
export const addCard = (value,card)=>{
    console.log(value);
    console.log(card);
    
}