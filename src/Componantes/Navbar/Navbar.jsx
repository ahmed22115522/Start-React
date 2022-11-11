import React from 'react'
import './Navbar.scss';
import {NavLink} from 'react-router-dom'
import {HiMenuAlt1 , HiX} from 'react-icons/hi'
import { useState } from 'react';

export const Navbar = () => {
  const  [toggle, setToggle] = useState(false)

  return (<>
      <nav className="nav navbar justify-content-between fixed-top">
          <div className="container">
            <div>
                <NavLink onClick={() => setToggle(false)} className='nav-link text-white fs-3 fw-bold logo' to='/'>Start <span className='r-letter'>R</span>eact</NavLink>
            </div>
            <ul className='navbar-nav large-menu flex-row '>
              <li className='nav-item px-3'>
                <NavLink className={({isActive}) =>isActive ? 'active nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='portfolio'>Portfolio</NavLink>
              </li>
              <li className='nav-item px-3'>
              <NavLink className={({isActive}) =>isActive ? 'active nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='about'>About</NavLink>
              </li>
              <li className='nav-item px-3'>
              <NavLink className={({isActive}) =>isActive ? 'active nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='contact'>Contact</NavLink>
              </li>
            </ul>

            <div className="nav-colapse p-1 ">
              <button className='text-white fs-5' onClick={() => setToggle(!toggle)}>Menu <HiMenuAlt1 /></button>
              {
                // Toggle render element
                toggle && (<>
                <div className="navbar-mobile">
                  <div className="container">
                    <ul className='navbar-nav flex-column'>
                      <li className='nav-item ps-2'>
                        <NavLink onClick={() => setToggle(false)} className={({isActive}) =>isActive ? 'active-mobile nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='portfolio'>Portfolio</NavLink>
                      </li>
                      <li className='nav-item ps-2'>
                        <NavLink onClick={() => setToggle(false)} className={({isActive}) =>isActive ? 'active-mobile nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='about'>About</NavLink>
                      </li>
                      <li className='nav-item ps-2 pb-2'>
                        <NavLink onClick={() => setToggle(false)} className={({isActive}) =>isActive ? 'active-mobile nav-link fw-bold fs-5 p-2' : 'nav-link fw-bold fs-5 p-2' } to='contact'>Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                    </>) 
                // toggle end
              }
            </div>

          </div>



      </nav>
    </>)
}
