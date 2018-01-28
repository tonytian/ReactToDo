var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var { Provider } = require('react-redux');

import TodoApp from 'TodoApp'; 
import Login from 'app/components/Login'; 

var actions = require('actions');
import { configure } from 'configureStore' ;

import TodoAPI from 'TodoAPI';

var store = configure({});


store.dispatch(actions.startAddTodos()); 

//Load foundation
$(document).foundation();

//Custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" >
                <Route path='todos' component={TodoApp} />
                <IndexRoute component={Login} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);