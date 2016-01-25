import React, {PropTypes} from 'react';

const Todo = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li
      onClick={onClick}
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
