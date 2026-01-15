import React from "react";
import "./App.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
const App = ()=>{

  function saludo(){
    console.log("Hola")
  }
  saludo()

  let cantidad =32; 
  let colorFondo = {backgroundColor: "green"}

  /*const celular ={
    marca: "Samsung",
    precio: 100000
  }*/
  return(
    <>
    {/* <h1 className="colorFondoPrincipal">Hola chicos, bienvenidos, en la clase {cantidad}</h1> 
    <h2 style={colorFondo}>Hola mundo</h2>

    <h3 style={{color:"blue"}}>Esta es la segunda clase</h3>

    <h4></h4>
    <TituloPrincipal saludo= "Esto es una props"/>
    
    <Boton texto="Agregar"/>
    <Boton texto="Eliminar"/>
    <Boton texto="Salir"/> 
     <ItemCount stock={20}/>
    <hr />
    <ItemCount stock={16}/>
    */}
    <NavBar/> 
    <ItemListContainer texto="Hola mundo"/>
    </>
  )
}

export default App