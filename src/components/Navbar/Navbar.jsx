import '../NavBar/NavBar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
      <h3>Distribuidora LyA</h3>
      </Link>
    <div className='Categories'>
      <NavLink to={`/category/Gaseosas`} className={({ isActive}) => isActive ? `ActiveOption` : `Option`}> Gaseosas </NavLink>
      <NavLink to={`/category/Cervezas`} className={({ isActive}) => isActive ? `ActiveOption` : `Option`}> Cervezas </NavLink>
      <NavLink to={`/category/Aperitivos`} className={({ isActive}) => isActive ? `ActiveOption` : `Option`}> Aperitivos </NavLink>
    </div>
    <CartWidget/>
    </nav>
  )
}

export default NavBar