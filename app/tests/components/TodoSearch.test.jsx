var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { TodoSearch } from 'TodoSearch';

describe('TodoList', () => {
    it('should exit', () => {
        expect(TodoSearch).toExist();
    });


    it('should call onSearch when search text changed', () => {
        var spy = expect.createSpy(); 
        var search = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);  
        search.refs.searchText.value = 'thing'
        TestUtils.Simulate.change(search.refs.searchText);
        var action = {
            type: 'SET_SEARCH_TEXT', 
            searchText: 'thing'
        }
        expect(spy).toHaveBeenCalledWith(action); 
    });


    it('should call onSearch when show compelete checked', () => {
        var spy = expect.createSpy(); 
        var search = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />); 
        search.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(search.refs.showCompleted);
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        expect(spy).toHaveBeenCalledWith(action); 
    });
});

