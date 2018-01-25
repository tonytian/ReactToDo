var React = require('react');
var ReactDOM = require('react-dom'); 
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import { AddTodoForm } from 'AddTodoForm'; 
import * as actions from 'actions';

describe('AddTodoForm', () => {
    it('should exit', () => {
        expect(AddTodoForm).toExist();
    })

    it('it should call onAddTodo prop with valid data', () => {
        var spy = expect.createSpy(); 
        var addTodo = TestUtils.renderIntoDocument(
            <AddTodoForm dispatch={spy} />
        ); 
        var $el = $(ReactDOM.findDOMNode(addTodo)); 
        const todoText = 'check mail';
        var action = actions.startAddTodo(todoText);
        addTodo.refs.todoText.value = todoText; 
        TestUtils.Simulate.submit($el.find('form')[0]); 
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('it should not call onAddTodo prop with invalid data', () => {
        var spy = expect.createSpy(); 
        var addTodo = TestUtils.renderIntoDocument(
            <AddTodoForm dispatch={spy} />
        ); 
        var $el = $(ReactDOM.findDOMNode(addTodo)); 
        const todoText = '';
        addTodo.refs.todoText.value = todoText; 
        TestUtils.Simulate.submit($el.find('form')[0]); 
        expect(spy).toNotHaveBeenCalled()
    });
}); 

