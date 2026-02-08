import React from "react";
import "./App.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom"; 
const App = ()=>{





  return(
    <>
      <NavBar/> 

    {/*<ItemListContainer/>
    <ItemDetailContainer/>*/}
    
    <Routes>
      {/*if(url===""){return <Componente/>} */}
      <Route path="/" element= {<ItemListContainer/>}/>
      { /*
        <Route path="/" element= {<p>Soy la landing</p>}/>
        <Route path="/" element= {<p>Soy la landing</p>}/>
        <Route path="/" element= {<p>Soy la landing</p>}/>
        <Route path="/" element= {<p>Soy la landing</p>}/>
        <Route path="/" element= {<p>Soy la landing</p>}/>
      */}
      <Route path="/categorias/:id" element= {<ItemListContainer/>}/>

      <Route path="/detalle/:id" element= {<ItemDetailContainer/>}/>

      <Route path="/carrito" element= {<p>Soy la página de carrito</p>}/>

      </Routes>

    </>
  )
}

export default App