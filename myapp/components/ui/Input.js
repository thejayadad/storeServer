'use client'
import React from 'react'

const Input = ({name, placeholder, type}) => {
  return (
    <div>
        <input 
        name={name}
        placeholder={placeholder}
        type={type}  
        className="input input-ghost w-full max-w-md" 
        />
    </div>
  )
}

export default Input