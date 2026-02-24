import { collection, getDocs , query , where} from "firebase/firestore"
import { db } from "./firebaseConfig"

const misProductos=[
    {id:1, nombre: "Carulina", precio: 20, img: "../public/img/cartulina.png", detalles: "Cartulina escolar en colores surtidos"},
    {id:2, nombre: "Engranpadora", precio: 10, img: "../public/img/engrapadora.png", detalles: "Engranpadora escolar en la marca artesco con saca clips"},
    {id:3, nombre: "Plumones", precio: 15, img: "../public/img/plulomnes.png", detalles: "Plumones para papelote Faber Castell en colores surtidos"},
    {id:4, nombre: "Reglas", precio: 6, img: "../public/img/reglas.png", detalles: "Juego de escuadras Artesco de 30 cm."},
    {id:5, nombre: "Plumones Faber", precio: 8, img: "../public/img/Plumon Faber.png", detalles: "Paquete de plumones Faber Fiesta en presentación de 12 unidades"},
    {id:6, nombre: "Plumones Standford", precio: 12, img: "../public/img/plumon standford.png", detalles: "Plumones Stanford Fiesta en presentación de 12 unidades"},
    {id:7, nombre: "Papel de regalo para niña", precio: 3, img: "../public/img/papel de regalo mujer.png", detalles: "Papel de regalo decorativo para niñas"},
    {id:8, nombre: "Papel de regalo para niñ8", precio: 3, img: "../public/img/papel de regalo hombre.png", detalles: "Papel de regalo decorativo para niños"},
]

 
export const getProductos = () => {

    const productosCollection = collection(db, "productos")

    return getDocs(productosCollection)
        .then((respuesta) => {
            const productosConFormato = []

            respuesta.docs.forEach(doc => {
                productosConFormato.push(doc.data())
            })

            return productosConFormato
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductosByCategory = (categoria) => {

    const productosCollection = collection(db, "productos")

    const filtro = query(
        productosCollection,
        where("categoria","==", categoria),
        where("precio",">=",1)
    )
    return getDocs(filtro)
        .then((respuesta) => {
            const productosConFormato = []

            respuesta.docs.forEach(doc => {
                productosConFormato.push(doc.data())
            })

            return productosConFormato
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id == id)
            resolve(producto)
        }, 2000)
    })
}