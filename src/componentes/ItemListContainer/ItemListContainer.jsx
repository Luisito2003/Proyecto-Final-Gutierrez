import { useState, useEffect } from "react"
import { getProductos, getProductosByCategory } from "../../asyncmock" 
import { ItemList } from "../ItemList/ItemList"
import { useParams, Link } from "react-router-dom" 
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProducto] = useState([])
  
  const { id } = useParams() 

  useEffect(() => {
    const funcionProductos = id ? getProductosByCategory(id) : getProductos()

    funcionProductos
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.log(error))

  }, [id]) 

  return (
    <>
      <h2 style={{textAlign: "center", textTransform: "capitalize", margin: "20px 0"}}>
        {id ? `Categoría: ${id}` : "Mis Productos"}
      </h2>
      {id && (
        <div className="btn-volver-container">
          <Link to="/" className="btn-volver">
            ← Ver todos los productos
          </Link>
        </div>
      )}

      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer