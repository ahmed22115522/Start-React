import React, {useState} from 'react'
import {FaStar, FaPlus, FaWindowClose} from 'react-icons/fa/'
import './Portfolio.scss'
import Cabin from '../../Assets/cabin.png'
import Cake from '../../Assets/cake.png'
import Circus from '../../Assets/circus.png'
import Game from '../../Assets/game.png'
import Safe from '../../Assets/safe.png'
import Submarine from '../../Assets/submarine.png'
import { Modal } from './Modal'


export const Portfolio = () => {
  const imgCardsArr = [
    {img : Cabin, title: 'LOG CABIN'},
    {img : Cake, title: 'TASTY CAKE'},
    {img : Circus, title: 'CIRCUS TENT'},
    {img : Game, title: 'CONTROLLER'},
    {img : Safe, title: 'LOCKED SAFE'},
    {img : Submarine, title: 'SUBMARINE'}
  ]

  const [modal, setmModal] = useState(false)
  const [tempData, setmTempData] = useState([])

  const getData = (img,title) => {
    let tempData = [img, title]
    setmTempData(item => [...tempData])
    return setmModal(true)
  }


  return (
    <div className='py-5 mt-5 portfolio text-center'>
      <h2 className='fw-bold mt-3 fs-1 font-monospace'>PORTFOLIO</h2>
      <div className="center-star text-dark position-relative d-flex justify-content-center align-items-center">
          <div className="p-line me-3"></div>
          <FaStar className='fs-4'/>
          <div className="p-line ms-3"></div>
        </div>

        <div className="container">
          <div className="row w-75 mt-3 m-auto gy-3">
            {imgCardsArr.map((ele,index) => (<>
              <div key={index} className="col-md-6 col-lg-4">
                <div className="p-item position-relative">
                  <img src={ele.img} alt="p-item" className='w-100 m-auto rounded'/>
                <div onClick={() => getData(ele.img, ele.title)} className="img-layer rounded position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FaPlus  className='plus-size fw-bold'/>
                </div>
              </div>
            </div>
            </>))}

              {
                modal ? <Modal img={tempData[0]} title={tempData[1]} hide={() => setmModal(false) }/> : ''
              }
          </div>
        </div>
        


      </div>
  )
}


