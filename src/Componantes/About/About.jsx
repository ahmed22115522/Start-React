import React from 'react'
import './About.scss';
import {FaStar} from 'react-icons/fa'
export const About = () => {
  return (
    <section className='about py-5 mt-5 text-center vh-100'>
        <div className="about-us pb-5">
          <h2 className='fw-bold mt-3 text-white fs-1 font-monospace'>ABOUT</h2>
          <div className="center-star text-dark position-relative d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
            <FaStar className='fs-4 text-white'/>
            <div className="line ms-3"></div>
          </div>

    <div className="container">
      <div class="row mt-5">
        <div class="col-lg-4 ms-auto"><p class="lead text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div class="col-lg-4 me-auto"><p class="lead text-white">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
      </div>
    </div>

        </div>
    </section>
  )
}
