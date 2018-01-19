var React = require('react');
var ReactDOM = require('react-dom'); 
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm = require('AddTodoForm'); 

describe('AddTodoForm', () => {
    it('should exit', () => {
        expect(AddTodoForm).toExist();
    })

    it('it should call onAddTodo prop with valid data', () => {
        var spy = expect.createSpy(); 
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />); 
        var $el = $(ReactDOM.findDOMNode(addTodoForm)); 
        
        const todoText = 'check mail';
        addTodoForm.refs.todoText.value = todoText; 
        TestUtils.Simulate.submit($el.find('form')[0]); 
        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('it should not call onAddTodo prop with invalid data', () => {
        var spy = expect.createSpy(); 
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />); 
        var $el = $(ReactDOM.findDOMNode(addTodoForm)); 
        
        const todoText = '';
        addTodoForm.refs.todoText.value = todoText; 
        TestUtils.Simulate.submit($el.find('form')[0]); 
        expect(spy).toNotHaveBeenCalled();
    });
}); 

