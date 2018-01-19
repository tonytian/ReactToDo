var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {id: 1, text: 'todo 1'},
                {id: 2, text: 'todo 2'},
                {id: 3, text: 'todo 3'},
            ]
        }
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
}); 

module.exports = TodoApp; 