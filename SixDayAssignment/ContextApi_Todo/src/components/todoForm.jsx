// src/components/TodoForm.js
import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/context';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext); // Access addTodo from context
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ id: Date.now(), text, completed: false });
      setText(''); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
