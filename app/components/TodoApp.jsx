var React = require('react');
import TodoList from 'TodoList';
import AddTodo from 'AddTodoForm';
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
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp; 