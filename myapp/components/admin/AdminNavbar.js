import React from 'react'

const AdminNavbar = () => {
  return (
    <header className='px-4 py-8'>
        <div className='flex h-16 items-center px-4'>
            <div>Select Store</div>
            <div>Routes</div>
            <div className='ml-auto flex items-center space-x-4'>
            Auth
            </div>
        </div>
    </header>
  )
}

export default AdminNavbar