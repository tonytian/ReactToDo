import firebase, { firebaseRef } from 'app/firebase/index';
import moment from 'moment'

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT', 
        searchText
    }
}; 

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO', 
        todo
    }
}; 

export var startAddTodo = (text) => {
    return(dispatch, getState) => {
        var todo = {
            text, 
            createdAt: moment().unix(),
            completedAt: null,
            completed: false,
        }
        var todoRef = firebaseRef.child('todos').push(todo);
        todoRef.then(() => {
            dispatch(addTodo({
                ...todo, 
                id: todoRef.key
            })); 
        })
    } 

}; 

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}; 

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO', 
        id
    }
}; 