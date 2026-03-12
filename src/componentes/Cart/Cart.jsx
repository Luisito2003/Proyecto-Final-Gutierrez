import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { miContexto } from "../../providers/CardProvider";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = () => {
  const { items, vaciarCarrito } = useContext(miContexto);

  if (items.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Aún no hay productos en tu carrito</h2>
        <Link to="/" className="cart-empty-btn">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const totalCompra = items.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu Carrito de Compras</h2>
      
      <div className="cart-list">
        {items.map((producto) => (
          <CartItem key={producto.id} producto={producto} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total a pagar: S/.{totalCompra}</h3>
        
        <div className="cart-actions">
            <button className="cart-clear-btn" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            
            <Link to="/checkout" className="cart-checkout-btn" style={{ textDecoration: "none", display: "inline-block", textAlign: "center", boxSizing: "border-box" }}>
              Finalizar Compra
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;