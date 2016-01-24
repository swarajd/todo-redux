import * as types from '../constants/TodoActionTypes';

export function addTodo(text) {
	return { type: types.ADD_TODO, text };
}

export function toggleTodo(todo) {
	return { type: types.TOGGLE_TODO, todo};
}
