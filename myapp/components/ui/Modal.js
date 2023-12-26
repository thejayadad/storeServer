'use client'
import React from 'react'

const Modal = ({children, title, description, opening }) => {
  return (
    <div>
      <label htmlFor="my_modal_6" className="cursor-pointer text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">{opening}</label>

    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className="modal-box">
        <div className='flex justify-between'>
        <h3 className="font-bold text-lg">{title}</h3>
        <label htmlFor="my_modal_6" className="btn">X</label>
        </div>
        <p className="py-4">{description}</p>
        {children}
        <div className="modal-action">
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal