var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList'
import ConnectedTodo, { Todo } from 'Todo'

var { Provider } = require('react-redux');

describe('TodoList', () => {
    it('should exit', () => {
        expect(TodoList).toExist();
    });


    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something',
                completed: false,
                complatedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'Check mall',
                completed: false,
                complatedAt: undefined,
                createdAt: 500
            }
        ];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList);
        expect(todoList.length).toEqual(1);
        var todo = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodo);
        expect(todo.length).toBe(todos.length);

    })
});

