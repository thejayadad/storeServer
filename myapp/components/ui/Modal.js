'use client'
import React from 'react'

const Modal = ({children, title, description, opening }) => {
  return (
    <div>
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>{opening}</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{description}</p>
    <div className="modal-action">
      <form method="dialog">
        {children}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal