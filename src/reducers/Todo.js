import {ADD_TODO, TOGGLE_TODO} from '../constants/TodoActionTypes';
import objectAssign from 'object-assign';

const initialState = [
  {
    id: 0,
    text: 'learn react',
    completed: false
  },
  {
    id: 1,
    text: 'comp org',
    completed: false
  },
  {
    id: 2,
    text: 'cs 2114',
    completed: true
  }
];

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
        };
      }
      //if somehow the if/else breaks, in order to appease the linter
      return state;
    default:
      return state;
  }
};

export default function todoAppState(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}
