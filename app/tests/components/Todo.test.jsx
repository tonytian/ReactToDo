var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exit', () => {
        expect(Todo).toExist();
    });

    it('should toggle todo complete state when click on the todo item', () => {
        var todoData = [
            {
                id: '123',
                text: 'thing',
                completed: false
            }
        ];
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        var $el= $(ReactDOM.findDOMNode(todo));
        debugger;
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalled();
    })
});

