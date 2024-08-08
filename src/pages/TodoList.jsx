const TodoList = ({todos, setTodos}) => {

    const handleUpdateTodo = (updatedTodo) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo
            }
            else {
                return todos
            }
        })
        setTodos(updatedTodos)
    };

    const handleDeleteTodo = (deletedTodo) => {
        const updatedTodos = todos.filter((todo) => todo.id !== deletedTodo.id)
        setTodos(updatedTodos)
    };

  return (
    <div className='text-green-500'>
        <h3>TodoList</h3>
        {
            todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id}
                    />
                )
            })
        }
    </div>
  )
}

export default TodoList