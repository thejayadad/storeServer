import React from 'react'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <div className='flex  mx-auto max-w-screen-xl'>
            <AuthLinks />
        </div>
    </header>
  )
}

export default Navbar