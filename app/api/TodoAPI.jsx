var $ = require('jquery');

var TodoAPI = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }       
    }, 
    getTodos: function() {
        var todoStr = localStorage.getItem('todos');
        var todos = [];
        try {
            var todos = JSON.parse(todoStr); 
        }
        catch(e) {
            console.log(e);
        }
        return $.isArray(todos) ? todos: [];
    }
}; 

module.exports = TodoAPI;