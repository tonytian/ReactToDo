var React = require('react');
import { connect } from 'react-redux';  
import { setSearchText, toggleShowCompleted } from 'actions'; 

export var TodoSearch = React.createClass({
    handleSearch: function () {
        var searchText = this.refs.searchText.value;

        this.props.dispatch(setSearchText(searchText)); 
    },
    hanldeToggleShowCompeted: function() {
        var showCompleted = this.refs.showCompleted.checked;
        this.props.dispatch(toggleShowCompleted());
    },
    render: function () {
        var {showCompleted, searchText} = this.props; 
        return (
            <div className="container__header">
                <div>
                    <input type='search' ref='searchText' placeholder='Search todos' onChange={this.handleSearch} value={searchText}/>
                </div>
                <div>
                    <label>
                        <input type='checkbox' ref='showCompleted' onChange={this.hanldeToggleShowCompeted} checked={showCompleted}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }

});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted, 
            searchText: state.seadrchText
        }
    }
)(TodoSearch); 