var $ = require('jquery');

var TodoAPI = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var todoStr = localStorage.getItem('todos');
        var todos = [];
        try {
            var todos = JSON.parse(todoStr);
        }
        catch (e) {
            console.log(e);
        }
        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filtered = todos;
        
        filtered = filtered.filter((item) => {
            return !item.completed || showCompleted;
        });

        var filtered = filtered.filter((item) => {
            return searchText.length === 0 || item.text.toLowerCase().includes(searchText);
        });

        filtered.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1; 
            }
            else if(a.completed && !b.completed) {
                return 1; 
            }
            else {
                return 0;
            }
        }); 


        return $.isArray(filtered) ? filtered : [];
    }
};

module.exports = TodoAPI;