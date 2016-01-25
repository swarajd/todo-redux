import * as types from '../constants/TodoActionTypes';

export function addTodo(id, text) {
	return { type: types.ADD_TODO, id, text };
}

export function toggleTodo(id) {
	return { type: types.TOGGLE_TODO, id };
}
