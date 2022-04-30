import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4'>
      <p className='text-2xl font-bold text-grey-800'>My Todos</p>

      <div className='flex'>
        <a className='rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4' href='/api/logout'>
          Logout
        </a>
        <a className='rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4' href='/api/login'>
          Login
        </a>
      </div>
    </nav>
  )
}

export default Navbar

// colors go from 100-900
