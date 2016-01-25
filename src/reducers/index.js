import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import todoAppState from './Todo';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  todoAppState
});

export default rootReducer;
