var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var { Provider } = require('react-redux');
var TodoApp = require('TodoApp');

var actions = require('actions');
import { configure } from 'configureStore' ;

import TodoAPI from 'TodoAPI';

var todos = TodoAPI.getTodos(); 

var store = configure({
    todos
});

store.subscribe(() => {
    console.log('new state', store.getState());
    TodoAPI.setTodos(store.getState().todos);  
});

//Load foundation
$(document).foundation();

//Custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);