var React = require('react');

var ReactDOM = require('react-dom');

var expect = require('expect'); 
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils'); 

var Main  = require('Main'); 

describe('Main', () => {
    it('should exist', () => {
        expect(Main).toExist();
    }); 

    it('render', () => {
        var timer = TestUtils.renderIntoDocument(<Main />);
        var $el = $(ReactDOM.findDOMNode(timer));
        var $title = $el.find('h1'); 
        expect($title).toExist();
    })
}); 

