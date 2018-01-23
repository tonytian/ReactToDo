var React = require('react');
var moment = require('moment');
var { connect } = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
    render: function () {
        var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var msg = 'Created at: ';
            var timestamp = moment.unix(createdAt);
            if (completed) {
                msg = 'Completed at: ';
                timestamp = moment.unix(completedAt);
            }

            return msg + timestamp.format("MMMM Do, YYYY @ h:m A");
        }
        return (
            <div ref="todoContainer" className={todoClassName} onClick={
                () => { 
                    dispatch(actions.toggleTodo(id)); 
                }}>
                <div>
                    <input type='checkbox' checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>

            </div>
        )
    }
});

export default connect()(Todo); 