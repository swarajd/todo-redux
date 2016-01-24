import {ADD_TODO, TOGGLE_TODO} from '../constants/TodoActionTypes';
import objectAssign from 'object-assign';

const initialState = [];

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          completed: !state.completed
        }
      }
    default:
      return state;
  }
}

export default function todoAppState(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state
        todo(undefined, action);
      }
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state;
  }
}
