# Tienda Luis

Tienda Luis es una aplicación web desarrollada con React que simula una tienda online de productos de papelería y manualidades. Permite a los usuarios navegar por categorías, ver detalles de productos y gestionar un carrito de compras. El proyecto utiliza Firebase para la gestión de productos y React Router para la navegación.

## Características

- **Listado de productos:** Visualiza todos los productos disponibles o filtrados por categoría.
- **Detalle de producto:** Consulta información detallada de cada producto.
- **Carrito de compras:** Añade productos al carrito y visualiza la cantidad seleccionada.
- **Navegación SPA:** Navegación fluida entre páginas usando React Router.
- **Estilos modernos:** Interfaz atractiva y responsiva con CSS personalizado.
- **Integración con Firebase:** Los productos se obtienen desde una base de datos Firestore.

## Estructura del proyecto

```
├── public/
│   └── img/                # Imágenes de productos
├── src/
│   ├── componentes/        # Componentes reutilizables
│   │   ├── CartWidget/
│   │   ├── Item/
│   │   ├── ItemDetail/
│   │   ├── ItemDetailContainer/
│   │   ├── ItemList/
│   │   ├── ItemListContainer/
│   │   └── NavBar/
│   ├── providers/
│   │   └── CardProvider.jsx # Contexto global para el carrito
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada de React
│   ├── asyncmock.js        # Mock y funciones de consulta a Firebase
│   └── firebaseConfig.js   # Configuración de Firebase
├── index.html
├── package.json
└── vite.config.js
```

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/tienda-luis.git
   cd tienda-luis
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura Firebase:**
   - El archivo [`src/firebaseConfig.js`](src/firebaseConfig.js) ya está configurado con las credenciales de tu proyecto de Firebase.
   - Asegúrate de tener una colección llamada `productos` en tu Firestore.

4. **Inicia la aplicación en modo desarrollo:**
   ```sh
   npm run dev
   ```

5. **Abre en tu navegador:**
   - Ve a [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la build de producción.
- `npm run lint` — Ejecuta ESLint para revisar el código.

## Principales componentes

- [`App`](src/App.jsx): Define las rutas principales y la estructura general.
- [`NavBar`](src/componentes/NavBar/NavBar.jsx): Barra de navegación con enlaces a categorías y carrito.
- [`ItemListContainer`](src/componentes/ItemListContainer/ItemListContainer.jsx): Muestra la lista de productos o filtrados por categoría.
- [`ItemDetailContainer`](src/componentes/ItemDetailContainer/ItemDetailContainer.jsx): Muestra el detalle de un producto seleccionado.
- [`CartWidget`](src/componentes/CartWidget/CartWidget.jsx): Icono del carrito con la cantidad de productos.
- [`CardProvider`](src/providers/CardProvider.jsx): Proveedor de contexto para el carrito de compras.

## Personalización

- Puedes modificar los productos iniciales en [`src/asyncmock.js`](src/asyncmock.js).
- Las imágenes de productos deben estar en la carpeta [`public/img`](public/img).

## Dependencias principales

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)

## Licencia

Este proyecto es solo para fines educativos y de práctica.

---

¡Gracias por usar Tienda Luis! Si tienes sugerencias o encuentras algún problema, no dudes en abrir un issue o contribuir.

## Proyecto desplegado

[ecomerce-corporacion-bethel.netlify.app](https://ecomerce-corporacion-bethel.netlify.app/)