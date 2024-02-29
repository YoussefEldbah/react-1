import React from 'react'
import { Link } from 'react-router-dom'
import ay7aga from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
export default function NavBar() {
  return (
    <>
  <nav className={`${ay7aga.navBg} navbar position-fixed fixed-top  navbar-expand-lg`}>
  <div className="container py-3">
  <Link className='navbar-brand fs-2 fw-bolder text-white ' to={""}>  START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className="nav-item pe-3">
          <NavLink   className={`nav-link text-white fw-bold `}    to={"about"}>ABOUT</NavLink >
        </li>
        <li className="nav-item pe-3">
        <Link  className='nav-link text-white fw-bold' to={"portfolio"}>PORTFOLIO</Link>

        </li>
        <li className="nav-item pe-3">
        <Link className='nav-link text-white fw-bold' to={"contact"}>CONTACT</Link>

        </li>
     
      </ul>
      
    </div>
  </div>
</nav>

    
    
    
    </>

  )
}
