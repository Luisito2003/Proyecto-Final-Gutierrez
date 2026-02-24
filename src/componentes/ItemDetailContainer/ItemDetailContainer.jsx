import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const[producto, setProducto]=useState(null)
  const params = useParams()
  console.log("🚀 ~ ItemDetailContainer ~ params:", params)
  

  useEffect(() => {
    console.log("🚀 ~ ItemDetailContainer ~ params.id:", params.id)
    getUnProducto(params.id)
      .then(respuesta => setProducto(respuesta))
    }, [])
    
    return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer