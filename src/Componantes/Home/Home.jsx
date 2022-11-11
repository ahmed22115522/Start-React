import React from 'react'
import './Home.scss'
import logo from '../../Assets/avataaars.svg'
import star from '../../Assets/star-solid.svg'
export const Home = () => {
  return (
      <section className='home-section text-center vh-100 d-flex justify-content-center align-items-center'>
        <div className="hero container">
          <img src={logo} alt="logo"  className='py-3'/>
          <h1 className='text-white fw-bold mb-2'>Start React</h1>
          <div className="center-star d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
            <div className="star"><img src={star} alt="Star"  /></div>
            <div className="line ms-3"></div>
          </div>
          <p className='fs-4 fw-light text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
  )
}
