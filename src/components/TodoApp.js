import React, {PropTypes} from 'react';
import Todo from './Todo';

let nextId = 0;

const TodoApp = (props) => {

  const add = (text) => {
    props.actions.addTodo(nextId++, text);
  }

  const toggle = (id) => {
    props.actions.toggleTodo(id);
  }

  const todos = props.todoAppState;

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id}
                {...todo}
                onClick={toggle(todo.id)}
          />
        )}
      </ul>
    </div>
  )
}

TodoApp.propTypes: {
  actions: React.PropTypes.object.isRequired,
  todoAppState: PropTypes.object.isRequired
}

export default TodoApp;
