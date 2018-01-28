import React from 'react';
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import { hashHistory } from 'react-router';

import { configure } from 'configureStore';
import firebase from 'app/firebase/'
import * as actions from 'actions';
import router from 'app/router/'

var store = configure({});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        hashHistory.push('todos');

    }
    else {
        store.dispatch(actions.logout());
        hashHistory.push('/')
    }
});

//Load foundation
$(document).foundation();

//Custom css
require('style!css!sass!applicationStyles');



ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);