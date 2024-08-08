import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
import TodoForm from './pages/TodoForm';
import Navbar from './components/Navbar';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then(r => r.json())
    .then(data => setTodos(data))
  }, [])

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  return (
    <BrowserRouter>
    <div className='h-screen'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoList todos={todos} setTodos={setTodos}/>} />
        <Route path="/form" element={<TodoForm />} handleAddTodo={handleAddTodo}/>
      </Routes>
    </div>
      
    </BrowserRouter>
  )
}

export default App
