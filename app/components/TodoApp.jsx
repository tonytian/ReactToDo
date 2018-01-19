var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {id: 1, text: 'todo 1'},
                {id: 2, text: 'todo 2'},
                {id: 3, text: 'todo 3'},
            ], 
            showCompleted: false, 
            searchText: ''
        }
    },
    handleAddTodo: function(text) {
        console.log('new todo: ' + text);
        var oldTodos = this.state.todos; 

        oldTodos.push({id: oldTodos.length + 1, text: text}); 
        this.setState({todos: oldTodos}); 
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