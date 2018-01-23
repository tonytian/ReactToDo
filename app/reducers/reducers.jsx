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
                {
                    id: uuid(),
                    text: action.text,
                    createdAt: moment().unix(),
                    completedAt: undefined,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            var result = state.map((item) => {
                if (item.id === action.id) {
                    item.completed = !item.completed;
                }
                return item; 
            })
            console.log(result)
            return result;
        default:
            return state;
    }
}