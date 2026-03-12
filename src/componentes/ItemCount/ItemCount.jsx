import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ stock, inicial = 1, onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="item-count-container">
            <div className="item-count-controls">
                <button className="item-count-btn-control" onClick={restar}>-</button>
                <span className="item-count-number">{contador}</span>
                <button className="item-count-btn-control" onClick={sumar}>+</button>
            </div>
            
            <button 
                className={`item-count-btn ${stock === 0 ? 'disabled' : ''}`}
                onClick={() => onAdd(contador)} 
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;