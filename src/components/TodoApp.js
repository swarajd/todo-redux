import React, {PropTypes} from 'react';

let nextId = 0;

const TodoApp = (props) => {

  const add = (text) => {
    props.actions.addTodo(nextId++, text);
  }

  return (
    <div> hello </div>
  )
}

TodoApp.propTypes: {
  actions: React.PropTypes.object.isRequired,
  todoAppState: PropTypes.object.isRequired
},

export default TodoApp;
