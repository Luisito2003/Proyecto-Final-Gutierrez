import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
const NavBar = () => {





  return (
    <header>
        <h1>Coporación Bethel</h1>
        
        <nav>
            <li>Útiles Escolares</li>
            <li>Medicina</li>
            <li>Gelénicos</li>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar