import {ADD_TODO, TOGGLE_TODO} from '../constants/TodoActionTypes';
import objectAssign from 'object-assign';

const initialState = []

export default function todoAppState(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state
        //instead of the object return it through the todo reducer
        {
          text: action.text
          completed: false
        }
      }
    case TOGGLE_TODO:
      //create a todo reducer
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    default:
      return state;
  }
}
