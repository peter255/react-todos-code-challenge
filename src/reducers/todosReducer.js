
import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, SET_COMPLETED_TODO, EDIT_TEXT_TODO } from '../actions/types';

const initialState = {
    isPending: true,
    todos: [],
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return {
                ...state,
                isPending: false,
                todos: action.todos,
                error: false
            }

        case ADD_TODO:
            state.todos.push(action.todo);
            save(state.todos);
            return { ...state, state };

        case DELETE_TODO:
            state.todos.splice(action.todoIndex, 1);
            save(state.todos);
            return { ...state, state };

        case SET_COMPLETED_TODO:
            let _todo = state.todos[action.todoIndex];
            _todo.complete = true;
            state.todos.splice(action.todoIndex, 1, _todo);

            save(state.todos);
            return { ...state, state };

        case EDIT_TEXT_TODO:
            let todo = state.todos[action.todoIndex];
            todo.text = action.text;
            state.todos.splice(action.todoIndex, 1, todo);
            save(state.todos);
            return { ...state, state };

        default:
            return state;
    }
}


function save(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}