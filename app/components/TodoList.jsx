var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo'; 
import TodoAPI from 'TodoAPI';

export var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchText} = this.props; 
        var filtered = TodoAPI.filterTodos(todos, showCompleted, searchText);

        
        var renderTodos = () => {
            if (filtered.length === 0) {
                return <p className="container__message">Nothing to do</p>
            }
            return filtered.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            })
        }; 

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos, 
            showCompleted: state.showCompleted, 
            searchText: state.searchText
        }
    }
)(TodoList); 