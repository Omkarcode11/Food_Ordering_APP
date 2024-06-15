import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({children,open,className='',onClose}) {
    let modalRef = useRef()

    useEffect(()=>{
        if(open){
          modalRef.current.showModal()
        }

        return ()=>modalRef.current.close()
    },[open])


  return (
    createPortal(
        <dialog className={`modal ${className}`}  ref={modalRef} onClose={onClose}>
        {children}
    </dialog>,
    document.getElementById("modal")
    )
  )
}

export default Modal