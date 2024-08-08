import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const TodoForm = ({handleAddTodo}) => {
    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        completed: false,
        // priority: ['']
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(() => ({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        const todo = {
            title: formData.title,
            description: formData.description,
            completed: formData.completed,
            // priority: formData.priority,
        }
        e.preventDefault()
        fetch('http://localhost:3001/todos', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        })
        .then((res) => res.json())
        .then((data) => handleAddTodo(data))
    };


  return (
    <div className='flex items-center justify-center h-[500px] rounded-xl'>
        <form onSubmit={handleSubmit} className='bg-green-400 flex flex-col justify-center items-center w-[700px] h-full shadow-md shadow-slate-200'>
            <div className='flex flex-col justify-center gap-3'>
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Title...'
                    value={formData.title}
                    className='bg-slate-300 text-white placeholder:text-white rounded-lg px-4 py-2 border-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <label htmlFor='description'>Description:</label>
                <input
                    type='text'
                    id='description'
                    name='description'
                    placeholder='Description...'
                    value={formData.description}
                    className='bg-slate-300 text-white placeholder:text-white rounded-lg px-4 py-2 border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <label htmlFor='completed'>Completed:</label>
                <input
                    type='checkbox'
                    id='completed'
                    name='completed'
                    value={formData.completed}
                    className='bg-slate-300 rounded-lg px-4 py-2 '
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <label htmlFor='priority'>Priority:</label>
                <select id='priority' name='priority' onChange={handleChange} className='block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </div>

            <button onClick={() => {console.log("clicked!")}} className="flex items-center justify-center gap-3 p-2 bg-blue-400 rounded-md text-white">
                <FaCheck className=''/>
                Submit 
            </button>
        </form>
    </div>
  )
}

export default TodoForm