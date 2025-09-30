import { useState } from 'react'
import './App.css'
import AppTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { type Todo } from './types/todo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }])
  }

  const removeTodoHandler = (todoId:string)=>{
    const newTodo = todos.filter((todo:Todo)=>{
      return todo.id !== todoId;
    })
    setTodos(newTodo)
  }

  return (
    <main className='max-w-6xl mx-auto'>
      <AppTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo = {removeTodoHandler} />
    </main>
  )
}

export default App
