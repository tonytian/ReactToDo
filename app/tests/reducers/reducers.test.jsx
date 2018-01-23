var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual('dog');
        });

        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);

            var res = reducers.showCompletedReducer(true, df(action));
            expect(res).toEqual(false);

            var res = reducers.showCompletedReducer(undefined, df(action));
            expect(res).toEqual(true);
        });

        it('should add todo', () => {
            var action = {
                type: 'ADD_TODO', 
                text: 'new'
            };

            var oldTodos = [{
                id: 111,
                text: 'old',
                createdAt: 'time',
                completedAt: undefined,
                completed: false,
            }]
            var res = reducers.todosReducer(df(oldTodos), df(action));
            expect(res.length).toEqual(2);
        });        

        it('should toggle todo completed', () => {
            var action = {
                type: 'TOGGLE_TODO', 
                id: 111
            };

            var oldTodos = [{
                id: 111,
                text: 'old',
                createdAt: 'time',
                completedAt: undefined,
                completed: false,
            }]
            var res = reducers.todosReducer(oldTodos, df(action));
            expect(res[0].completed).toEqual(true);
        });

    })
}); 
