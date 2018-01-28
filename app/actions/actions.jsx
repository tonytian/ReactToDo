import firebase, { firebaseRef , githubProvider} from 'app/firebase/index';
import moment from 'moment'

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            createdAt: moment().unix(),
            completedAt: null,
            completed: false,
        }
        console.log(todo);
        var todoRef = firebaseRef.child('todos').push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        })
    }

};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};


export var startToggleTodo = (id, completed) => {
    return (dispatch, state) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }

};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
};

export var startAddTodos = () => {
    return (dispatch, state) => {
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value').then((snap) => {
            var todos = snap.val() || {};
            var parsedTodos = [];
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                }
                );
            });

            dispatch(addTodos(parsedTodos));
        });
    }

}

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then(
            (result) => {
                console.log('auth worked: ', result); 
                dispatch(login(result.user.uid));
                
            }, 
            (e) => {
                console.log('unabled to auth', e);                 
            }
        ); 
    }
}

export var startLogout = () => {
    return (dispatch, getState) => {
        console.log('Logging out firebase');
        return firebase.auth().signOut().then( () => {
            console.log("Logged out!");
            dispatch(logout());
        }); 
    }
}

export var login = (uid) => {
    return {
        type: 'LOG_IN', 
        uid
    }
}

export var logout = () => {
    return {
        type: 'LOG_OUT'
    }
}