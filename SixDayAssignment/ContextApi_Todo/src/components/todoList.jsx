
import React, { useContext } from 'react';

import TodoItem from './todoItem';
import { TodoContext } from '../context/context';


const TodoList = () => {

     const {todos} = useContext(TodoContext)


  return (
    <ul>
      {todos.map((todo) => (
        // <TodoItem key={todo.id} todo={todo} />
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
};

export default TodoList;
