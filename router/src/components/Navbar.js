import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

function Navbar() {
  return (
    <div className='nav'>
        <NavLink to={'/home'}>home</NavLink><br/>
        <NavLink to={'/about'}>about</NavLink>
        <NavLink to={'/contact us'}>contact</NavLink>
        {/* to apply css make it navlink instead of link */}

    </div>
  )
}

export default Navbar