var React = require('react');
var ReactDOM = require('react-dom'); 
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo'); 

describe('Todo', () => {
    it('should exit', () => {
        expect(Todo).toExist();
    })
}); 

