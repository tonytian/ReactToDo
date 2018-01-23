var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoList', () => {
    it('should exit', () => {
        expect(TodoSearch).toExist();
    });


    it('should call onSearch when search text changed', () => {
        var spy = expect.createSpy(); 
        var search = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);  
        search.refs.searchText.value = 'thing'
        TestUtils.Simulate.change(search.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, 'thing'); 
    });

    it('should call onSearch when show compelete checked', () => {
        var spy = expect.createSpy(); 
        var search = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />); 
        search.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(search.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, ''); 
    });
});

