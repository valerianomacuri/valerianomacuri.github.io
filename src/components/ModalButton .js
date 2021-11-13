import React from 'react'
import ReactDOM from 'react-dom';
export const ModalButton  = () => {
    return (
        ReactDOM.createPortal(
            <a href="#about" className="ModalButton ">
                <i className='bx bx-up-arrow-alt'></i>
            </a>,
            document.getElementById('modal')
        )
    )
}
