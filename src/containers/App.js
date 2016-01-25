// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// setting aside fuel savings stuff
//import FuelSavingsApp from '../components/FuelSavingsApp';
//import * as FuelSavingsActions from '../actions/fuelSavingsActions';

// adding in the todo things
import TodoApp from '../components/TodoApp';
import * as todoActions from '../actions/todoActions';

class App extends React.Component {
  render() {
    const { todoAppState, actions } = this.props;

    return (
        <TodoApp todoAppState={todoAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  //should be an array
  todoAppState: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todoAppState: state.todoAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
