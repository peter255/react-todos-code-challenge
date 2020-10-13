import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, SET_COMPLETED_TODO,EDIT_TEXT_TODO } from './types';

export const actionCreators = {
    toggleTodos: () => {
        let value = localStorage.getItem("todos");
        let todos = [];
        if (value !== null) {
            todos = JSON.parse(value);
        }
        return dispatch => dispatch({ type: TOGGLE_TODO, todos });
    },
    addTodo: (todo) => {
        return dispatch => dispatch({ type: ADD_TODO, todo })
    },
    deleteTodo: (todoIndex) => {
        return dispatch => dispatch({ type: DELETE_TODO, todoIndex })
    },
    setCompletedTodo: (todoIndex) => {
        return dispatch => dispatch({ type: SET_COMPLETED_TODO, todoIndex })
    },
    editTextTodo: (todoIndex, text) => {
        return dispatch => dispatch({ type: EDIT_TEXT_TODO, todoIndex, text })
    }
};