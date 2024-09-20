import React, { useContext } from 'react';
import { TodoContext } from '../context/context';


const TodoItem = ({ todo }) => {

  const {removeTodo, toggleTodo} = useContext(TodoContext)

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
