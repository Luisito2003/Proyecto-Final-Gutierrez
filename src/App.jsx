import "./App.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart"; 
import CheckoutForm from "./componentes/CheckoutForm/CheckoutForm";
import { Routes, Route } from "react-router-dom"; 

const App = ()=>{

  return(
    <>
      <NavBar/> 
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/categorias/:id" element= {<ItemListContainer/>}/>
        <Route path="/detalle/:id" element= {<ItemDetailContainer/>}/>
        <Route path="/carrito" element= {<Cart/>}/>
        <Route path="/checkout" element= {<CheckoutForm/>}/>
      </Routes>
    </> 
  )
}

export default App;