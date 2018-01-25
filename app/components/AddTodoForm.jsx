var React = require('react');
var { connect } = require('react-redux');
import { startAddTodo } from 'actions'
import { configure } from 'configureStore';

export var AddTodoForm = React.createClass({
    onAddTodo: function(e) {
        e.preventDefault();
        var text = this.refs.todoText.value; 
        if(text && text.length > 0) {
            this.refs.todoText.value = ''; 
            this.props.dispatch(startAddTodo(text)); 
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

export default connect()(AddTodoForm); 