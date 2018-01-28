import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');
var createMockStore = configureMockStore([thunk]);
import firebase, { firebaseRef } from 'app/firebase/index';


describe('actions', function() {
    this.timeout(15000);
    it('should exist', () => {
        expect(actions).toExist();
    });

    it('should should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'searchy'
        };

        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                text: 'sth to do',
                completed: false,
                createdAt: 123,
                completedAt: null
            }
        };

        var res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should should generate toggle todo action', () => {
        var todoId = '123';
        var updates = {
            completed: true,
            completedAt: 123
        }
        var action = {
            type: 'UPDATE_TODO',
            id: todoId,
            updates
        };

        var res = actions.updateTodo(todoId, action.updates);

        expect(res).toEqual(action);
    });

    it('should should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    describe('test with firebase todos', () => {

        var testTodoRef; 
        var uid; 
        var todosRef; 

        beforeEach((done) => {

            var cleanupTodos = firebase.auth().signInAnonymously().then((user) => {
                console.log('removing all todos');

                uid = user.uid;
                todosRef = firebaseRef.child(`users/${uid}/todos`);
                return todosRef.remove(); 
            }).then(() => {
                console.log('adding a test todo');
                testTodoRef = todosRef.push();

                return testTodoRef.set({
                    text: 'sth to do',
                    completed: false,
                    createdAt: 23453453
                });
            }).then(() => {
                console.log('calling done')
                done();
            }).catch(done);
        });

        afterEach((done) => {
            todosRef.remove().then(() => done());
        })

        it('test get todos from firebase', () => {
            const store = createMockStore({});
            var thing = store.dispatch(actions.startAddTodos());
            thing.then(() => {
                const actions = store.getActions();
                expect(actions[0]).toInclude({
                    type: 'ADD_TODOS'
                });
            })
        });


        it('should create todo and dispatch ADD_TODO', (done) => {
            const store = createMockStore({});
            const todoText = 'My todo item';

            var thing = store.dispatch(actions.startAddTodo(todoText))
            console.log(thing);
            thing.then(() => {
                const actions = store.getActions();
                expect(actions[0]).toInclude({
                    type: 'ADD_TODO'
                });
                expect(actions[0].todo).toInclude({
                    text: todoText
                });
                done();
            }).catch(done);
        });

        it('should update todo and dispatch UPDATE_TODO', () => {
            var todoId = '123';
            var todos = [{
                id: todoId,
                completed: false,
                completedAt: null
            }];
            const store = createMockStore(todos);

            var thing = store.dispatch(actions.startToggleTodo(todoId, true));
            thing.then(() => {
                const actions = store.getActions;
                expect(actions[0]).toInclude({
                    type: 'UPDATE_TODO',
                });

                expect(actions[0].updates).toInclude({
                    completed: true,
                    id: todoId
                })
            });
        });
        it('should create login action', () => {
            var uid = '123abc'
            var res = actions.login(uid);
            expect(res).toEqual({
                type: 'LOG_IN',
                uid
            });
        });
        it('should create logout action', () => {
            var res = actions.logout();
            expect(res).toEqual({
                type: 'LOG_OUT'
            });
        })
    });
});

