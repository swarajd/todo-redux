import React, {PropTypes} from 'react';

const Todo = (props) => {
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
  )
}

Todo.propTypes: {
  text: React.PropTypes.string,
  id: React.PropTypes.number
}
