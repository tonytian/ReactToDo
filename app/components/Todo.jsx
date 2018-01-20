var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    onToggle: function (id) {
        return () => {
            this.props.onToggle(id);
        }
    },
    render: function () {
        var { id, text, completed, createdAt, completedAt } = this.props;
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
            <div ref="todoContainer" className={todoClassName} onClick={this.onToggle(id)}>
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

module.exports = Todo; 