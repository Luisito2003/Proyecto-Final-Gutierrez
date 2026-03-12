import React, { useContext, useState } from "react";
import { miContexto } from "../../providers/CardProvider";
import ItemCount from "../ItemCount/ItemCount"; 
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ id, nombre, precio, img, detalles, stock }) => {
  const { agregarItem } = useContext(miContexto);
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);
    const productoSeleccionado = { id, nombre, precio, img };
    agregarItem(productoSeleccionado, cantidad);
  };
  
  return (
    <div className="item-detail-container">
      <h2 className="item-detail-title">{nombre}</h2>
      <p className="item-detail-id">ID: {id}</p>
      
      <div className="item-detail-img-wrapper">
        <img className="item-detail-img" src={img} alt={nombre} />
      </div>
      
      <h3 className="item-detail-price">S/.{precio}</h3>
      <p className="item-detail-description">{detalles}</p>
      
      {
        cantidadAgregada > 0 ? (
            <Link to="/carrito" className="item-detail-finish-btn">
                Terminar mi compra
            </Link>
        ) : (
            <ItemCount inicial={1} stock={stock || 10} onAdd={handleOnAdd} />
        )
      }
    </div>
  );
};

export default ItemDetail;