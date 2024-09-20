

import './App.css'
import TodoList from './components/todoList'
import TodoForm from './components/todoForm'
import { TodoProvider } from './context/context'

function App() {
 
  return (
    <>
      <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </TodoProvider>
    </>
  )
}

export default App
