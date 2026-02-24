import { createContext, useState } from "react";

export const miContexto = createContext();

const { Provider } = miContexto;

const CardProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])

    function agregarItem(){    
        const copia=[...items]
        const nuevoItem={}
        items.push(nuevoItem)
        setItems(copia)
    }

    const valorDelContexto = {
        cantidad: cantidad,
        items: items,
        setCantidad: setCantidad,
        setItems: setItems
    };

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CardProvider;
