var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exit', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'todo text'; 
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []}); 
        todoApp.handleAddTodo('new todo'); 
        expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe('new todo');
    }); 

    it('should toggle todo complete state when handleToggle called', () => 
    {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: [ 
            {
                id: 123, 
                text: 'todo', 
                completed: false
            }
        ]}); 
        todoApp.handleToggle(123); 
        expect(todoApp.state.todos[0].completed).toBe(true);
    })
});

