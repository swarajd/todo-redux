import React, {PropTypes} from 'react';

const Todo = ({
  completed,
  text
}) => {
  return (
    <li
      style={{
        textDecoration:
          completed ?
            'line-through' :
            'none'
      }}>
      {text}
    </li>
  );
};

Todo.propTypes =  {
  text: React.PropTypes.string,
  completed: React.PropTypes.bool
};

export default Todo;
