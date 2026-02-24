import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="card-producto">
      <div className="card-img-wrapper">
        <img src={img} alt={nombre} />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-price">S/.{precio}</p>
        <p className="card-id">ID: {id}</p>
        
        <Link className="card-btn" to={`/detalle/${id}`}>
          Ver Detalles
        </Link>
      </div>
    </div>
  )
}

export default Item