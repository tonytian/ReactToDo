var expect = require('expect');

var TodoAPI = require('TodoAPI');
var KEY = 'todos'; 


describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem(KEY);
    }); 

    it('should exist', () => {
        expect(TodoAPI).toExist();
    }); 

    describe('setTodos', () => {
        
        it('should set valid todos array', () => {
            var todos = [{
                id: 111, 
                text: 'boom'
            }]; 
            TodoAPI.setTodos(todos); 
            var saved = JSON.parse(localStorage.getItem(KEY)); 
            expect(saved).toEqual(todos);
        });

        it('should not set in valid todos', () => {
            var todos = {blah: 'thing'}; 
            TodoAPI.setTodos(todos);
            expect(localStorage.getItem(KEY)).toNotExist();
        }); 
    });

    describe('getTodos', () => {
        it('should return empty array for invalid saved todos', () => {
            localStorage.setItem(KEY, 'Wrong');
            var actual = TodoAPI.getTodos();
            expect(actual).toEqual([]);
        }); 

        it('should return array for valid saved todos', () => {
            var todos = [{
                id: 111, 
                text: 'boom'
            }]; 
            localStorage.setItem(KEY, JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        })
        
    })
})