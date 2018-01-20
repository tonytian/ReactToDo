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

        if (searchText === '') {
            return filtered;
        }

        var filtered = filtered.filter((item) => {
            return item.text.toLowerCase().includes(searchText);
        });


        return $.isArray(filtered) ? filtered : [];
    }
};

module.exports = TodoAPI;