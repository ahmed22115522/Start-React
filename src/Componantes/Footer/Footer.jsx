import React from 'react'
import './Footer.scss'
import { FaFacebookF , FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";
export const Footer = () => {
  return (<>
      <footer className='footer py-5'>
        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-4 ">
              <div className="location text-center">
                <h2>LOCATION</h2>
                <p className='mb-0'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="social-media text-center">
                <h2>AROUND THE WEB</h2>

                <div className="socail-icons d-flex justify-content-center">
                  <div className="icon mx-2 mt-2">
                    <FaFacebookF  className='fs-3'/>
                  </div>
                  <div className="icon mx-2 mt-2">
                    <FaTwitter  className='fs-3'/>
                  </div>
                  <div className="icon mx-2 mt-2">
                  <FaLinkedinIn className='fs-3' />
                  </div>
                  <div className="icon mx-2 mt-2">
                  <FaDribbble  className='fs-3'/>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="about-footer text-center">
                <h2>ABOUT FREELANCER</h2>
                <p className='px-4'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>

          </div>
        </div>
      </footer>
        <div className="copyright">
          <p>Copyright © Your Website 2022</p>
        </div>
        </>)
}
