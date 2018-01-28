var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import ConnectedTodoApp, { TodoApp } from 'TodoApp'; 
var {Provider} = require('react-redux');
var actions = require('actions');

import TodoList from 'TodoList'
import { configure } from 'configureStore';

describe('TodoApp', () => {
    it('should exit', () => {
        expect(TodoApp).toExist();
    });

    it('should render', () => {
        var store = configure()
        var provider = TestUtils.renderIntoDocument(
            <Provider store={ store }>
                <TodoApp />
            </Provider>
        )
        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
        expect(todoList.length).toEqual(1);
    });
});

