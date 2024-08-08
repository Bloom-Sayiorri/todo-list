import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
    .then(r => r.json())
    .then(data => setTodos(data))
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/todos" element={<TodoList todos={todos} setTodos={setTodos}/>} />
        <Route exact path="/todos" element={<TodoForm todos={todos} setTodos={setTodos}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
