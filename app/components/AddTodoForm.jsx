var React = require('react');

var AddTodoForm = React.createClass({
    onAddTodo: function(e) {
        e.preventDefault();
        var text = this.refs.todoText.value; 
        if(text && text.length > 0) {
            this.refs.todoText.value = ''; 
            this.props.onAddTodo(text); 
        }
        else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onAddTodo}>
                    <input ref="todoText" type="text" placeholder="todo item text" />
                    <button className='button expanded hollow'>Add</button>
                </form>
            </div>
        )
    }
}); 

module.exports = AddTodoForm; 