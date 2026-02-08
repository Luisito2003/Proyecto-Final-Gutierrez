import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
export const CartWidget = () => {

    const imgCarrito= "https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png"
  return (
    <Link to="/carrito">
        <img className='imgCarrito' src={imgCarrito} alt="Imagen de carrito de compras"/>
        <strong>3</strong>
    </Link>
  )
}
