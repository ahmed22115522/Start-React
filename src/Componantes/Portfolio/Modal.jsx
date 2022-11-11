import React from 'react'
import {FaWindowClose, FaStar} from 'react-icons/fa'
export const Modal = (props) => {
  return (
    <div className= 'card position-fixed d-flex justify-content-center align-items-center' >
        <div className="card-item bg-white rounded p-3 position-relative">
          <FaWindowClose className='position-absolute fs-2 x-sign' onClick={props.hide}/>
          <h2 className='fw-bold fs-1 font-monospace mb-2'>{props.title}</h2>
          <div className="center-star text-dark position-relative d-flex justify-content-center align-items-center">
            <div className="p-line me-3"></div>
            <FaStar className='fs-4'/>
            <div className="p-line ms-3"></div>
          </div>
          <img src={props.img} alt="" className='w-75 rounded my-3' />
          <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti nulla repellendus culpa labore eum.</p>
          <button onClick={props.hide} className="btn btn-outline-success d-flex align-items-center m-auto"><FaWindowClose className='me-1' /> Close Window</button>
        </div>
    </div>
  )
}
