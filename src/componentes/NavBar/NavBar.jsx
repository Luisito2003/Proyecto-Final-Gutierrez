import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link , NavLink } from 'react-router-dom'
const NavBar = () => {





  return (
    <header>
        <NavLink to="/">
          <h1>Coporación Bethel</h1>
        </NavLink>
        <nav>
            <li>
              <Link to="/categorias/lacteos">Lacteos</Link>
            </li>
            <li>
              <Link to="/categorias/bebidas">Bebidas</Link>
            </li>
            <li>
              <Link to="/categorias/almacen">Almacen</Link>
            </li>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar