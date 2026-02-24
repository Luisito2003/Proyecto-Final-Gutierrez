import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link , NavLink } from 'react-router-dom'
const NavBar = () => {
 
  return (
    <header>
        <NavLink to="/">
          <h1>Coporación Bethel</h1>
        </NavLink>
        <nav>
          <ul>
            <li>
              <Link to="/categorias/papeleria">Papelería</Link>
            </li>
            <li>
              <Link to="/categorias/plumones">Plumones</Link>
            </li>
            <li>
              <Link to="/categorias/manualidades">Manualidades</Link>
            </li>
          </ul>
        </nav>
        
        <CartWidget/>
    </header>
  )
}

export default NavBar