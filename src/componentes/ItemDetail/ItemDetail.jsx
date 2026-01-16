import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio:{precio}</h3>
        <h3>ID:  {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Deleniti eveniet nam placeat pariatur ipsa earum. Assumenda mollitia neque voluptates animi, possimus distinctio recusandae quos, nostrum natus ducimus laudantium incidunt et!</p>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail