var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        }
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState(
            {
                todos: [
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: text,
                        completed: false,
                    }
                ]
            }
        );
    },
    handleToggle: function (id) {
        var { todos } = this.state;
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].completed = !todos[i].completed;
            }
        }
        this.setState({ todos: todos });
    },
    handleSearch: function (showCompleted, searchText) {
        console.log(showCompleted + '-' + searchText);
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var { todos, searchText, showCompleted } = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                <AddTodoForm onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp; 