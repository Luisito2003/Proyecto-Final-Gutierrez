import React, { useContext } from "react";
import { miContexto } from "../../providers/CardProvider";
import "./ItemDetail.css";

export const ItemDetail = ({ id, nombre, precio, img, detalles }) => {
  const valorActual = useContext(miContexto);

  const handleAgregarAlCarrito = () => { 
    valorActual.setCantidad(10);
  };
  
  return (
    <div className="item-detail-container">
      <h2 className="item-detail-title">{nombre}</h2>
      <p className="item-detail-id">ID: {id}</p>
      
      <div className="item-detail-img-wrapper">
        <img className="item-detail-img" src={img} alt={nombre} />
      </div>
      
      <h3 className="item-detail-price">S/.{precio}</h3>
      
      <p className="item-detail-description">
        {detalles}
      </p>
      
      <button className="item-detail-btn" onClick={handleAgregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;