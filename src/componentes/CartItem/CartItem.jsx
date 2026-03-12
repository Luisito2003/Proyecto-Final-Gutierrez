import React, { useContext } from 'react';
import { miContexto } from '../../providers/CardProvider';
import './CartItem.css';

export const CartItem = ({ producto }) => {
    const { eliminarItem } = useContext(miContexto);

    return (
        <div className="cart-item">
            <img src={producto.img} alt={producto.nombre} className="cart-item-img" />
            
            <div className="cart-item-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: S/.{producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
            </div>
            
            <div className="cart-item-subtotal">
                <p>Subtotal: S/.{producto.precio * producto.cantidad}</p>
            </div>

            <button className="cart-item-delete-btn" onClick={() => eliminarItem(producto.id)}>
                X
            </button>
        </div>
    );
};

export default CartItem;