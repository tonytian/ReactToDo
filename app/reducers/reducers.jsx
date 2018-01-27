var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
}

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'ADD_TODOS': 
            return [
                ...state, 
                ...action.todos
            ]
        case 'UPDATE_TODO':
            var result = state.map((item) => {
                if (item.id === action.id) {
                    item.completed = action.updates.completed;
                    item.completedAt = action.updates.completedAt; 
                }
                return item; 
            }); 
            return result;
        default:
            return state;
    }
}