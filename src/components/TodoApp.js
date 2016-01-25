import React, {PropTypes} from 'react';
import Todo from './Todo';

let nextId = 3;

const TodoApp = (props) => {

  const add = (text) => {
    props.actions.addTodo(nextId++, text);
  };

  const toggle = (id) => {
    props.actions.toggleTodo(id);
  };

  const todos = props.todoAppState;

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id}
                {...todo}
          />
        )}
      </ul>

    </div>
  );
};

/*

onClick={toggle(todo.id)}

<input type="text" ref={node => {
    input = node;
  }} />
<button onClick={() => {
    add(input.value);
    input.value = '';
}}>
  add todo
</button>

 */

//todo app state is actually an array
TodoApp.propTypes = {
  actions: React.PropTypes.object.isRequired,
  todoAppState: PropTypes.array.isRequired
};

export default TodoApp;
