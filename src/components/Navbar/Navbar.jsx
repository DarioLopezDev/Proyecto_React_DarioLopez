import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <nav>
      <h3>Distribuidora LyA</h3>
    <div>
      <button>Cervezas</button>
      <button>Gaseosas</button>
      <button>Aperitivos</button>
    </div>
    <CartWidget/>
    </nav>
  )
}

export default NavBar