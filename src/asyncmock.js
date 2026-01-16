const misPorductos=[
    {id:1, nombre: "Carulina", precio: 20, img: "../public/img/cartulina.png"},
    {id:2, nombre: "Engranpadora", precio: 10, img: "../public/img/engrapadora.png"},
    {id:3, nombre: "Plumones", precio: 15, img: "../public/img/plulomnes.png"},
    {id:4, nombre: "Reglas", precio: 6, img: "../public/img/reglas.png"},
]

export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misPorductos)
        },2000)

    })
}
export const getUnProducto = (id)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto=misPorductos.find(item=>item.id===id)
            resolve(producto)
        },2000)
    })

}