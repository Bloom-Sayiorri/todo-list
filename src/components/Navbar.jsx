import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-blue-500 text-white flex justify-between py-4 px-4 text-2xl shadow-md shadow-slate-400'>
        <NavLink to='/'>Todos</NavLink>
        <NavLink to='/form'>New Todo</NavLink>
    </header>
  )
}

export default Navbar