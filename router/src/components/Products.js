import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'


function Products() {
  return (
    <>
    <div>
        <input type={'search'} placeholder="search here"></input>
    </div>

    <NavLink to='Features'>features</NavLink><br/>
    <NavLink to='New'>New</NavLink>
  
    <Outlet/>

    </>
  )
}

export default Products