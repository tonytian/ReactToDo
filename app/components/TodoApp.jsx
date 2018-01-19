var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {id: uuid(), text: 'todo 1'},
                {id: uuid(), text: 'todo 2'},
                {id: uuid(), text: 'todo 3'},
            ], 
            showCompleted: false, 
            searchText: ''
        }
    },
    handleAddTodo: function(text) {
        this.setState(
            {
                todos: [
                    ...this.state.todos, 
                    {
                        id: uuid(), 
                        text: text
                    }
                ]
            }
        ); 
    }, 
    handleSearch: function(showCompleted, searchText) {
        console.log(showCompleted + '-' + searchText);
        this.setState({
            showCompleted: showCompleted, 
            searchText: searchText.toLowerCase()
        }); 
    }, 
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodoForm onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}); 

module.exports = TodoApp; 