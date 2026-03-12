import { createContext, useState } from "react";

export const miContexto = createContext();

const CardProvider = ({ children }) => {
    const [cantidad, setCantidad] = useState(0);
    const [items, setItems] = useState([]);

    const agregarItem = (producto, cantidadComprada) => {
        setCantidad(prevCantidad => prevCantidad + cantidadComprada);
        const itemExiste = items.find((item) => item.id === producto.id);

        if (itemExiste) {
            const carritoActualizado = items.map((item) => {
                if (item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + cantidadComprada };
                }
                return item;
            });
            setItems(carritoActualizado);
        } else {
            setItems([...items, { ...producto, cantidad: cantidadComprada }]);
        }
    };

    const eliminarItem = (id) => {
        const itemAEliminar = items.find((item) => item.id === id);
        if (itemAEliminar) {
            setCantidad((prevCantidad) => prevCantidad - itemAEliminar.cantidad);
            setItems(items.filter((item) => item.id !== id));
        }
    };

    const vaciarCarrito = () => {
        setItems([]);
        setCantidad(0);
    };

    const valorDelContexto = {
        cantidad,
        items,
        agregarItem,
        eliminarItem,
        vaciarCarrito
    };

    return (
        <miContexto.Provider value={valorDelContexto}>
            {children}
        </miContexto.Provider>
    );
}

export default CardProvider;