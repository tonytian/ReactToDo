var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var moment = require('moment');
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
                        createdAt: moment().unix(),
                        completedAt: undefined,
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
                if (todos[i].completed) {
                    todos[i].completedAt = moment().unix();
                }
                else {
                    todos[i].completedAt = undefined;
                }
            }
        }
        this.setState({ todos: todos });
    },
    handleSearch: function (showCompleted, searchText) {
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
                <h1 className="page-title">Todo App</h1>
                <div className="row" >
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                            <AddTodoForm onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp; 