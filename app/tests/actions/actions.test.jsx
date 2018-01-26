// import expect from 'expect'; 
// var actions  =  require('actions'); 
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// var createMockStore = configureMockStore([thunk]);

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
    it('should exist', ()=> {
        expect(actions).toExist(); 
    }); 

    it('should should generate search text action', ()=> {
        var action = {
            type: 'SET_SEARCH_TEXT', 
            searchText: 'searchy'
        }; 

        var res = actions.setSearchText(action.searchText); 

        expect(res).toEqual(action); 
    }); 

    it('should should generate add todo action', ()=> {
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

    it('should should generate toggle todo action', ()=> {
        var action = {
            type: 'TOGGLE_TODO', 
            id: 123
        }; 

        var res = actions.toggleTodo(action.id); 

        expect(res).toEqual(action); 
    }); 

    it('should should generate toggle show completed action', ()=> {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }; 

        var res = actions.toggleShowCompleted(); 

        expect(res).toEqual(action); 
    }); 
})