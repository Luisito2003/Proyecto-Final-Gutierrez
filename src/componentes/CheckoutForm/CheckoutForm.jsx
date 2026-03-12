import React, { useState, useContext } from "react";
import { miContexto } from "../../providers/CardProvider";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig"; 
import { Link } from "react-router-dom";
import "./CheckoutForm.css";

export const CheckoutForm = () => {
  const { items, vaciarCarrito } = useContext(miContexto);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    const totalCompra = items.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

    const orden = {
      comprador: { nombre, telefono, email },
      items: items.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad
      })),
      total: totalCompra,
      fecha: serverTimestamp()
    };

    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        setError("");
        vaciarCarrito();
      })
      .catch((error) => {
        console.error("Error al crear la orden: ", error);
        setError("Hubo un error al procesar tu compra. Intenta de nuevo.");
      });
  };

  if (ordenId) {
    return (
      <div className="checkout-success">
        <h2>¡Gracias por tu compra, {nombre}! 🎉</h2>
        <p>Tu orden ha sido procesada con éxito.</p>
        <div className="checkout-order-id">
          Tu código de seguimiento es: <strong>{ordenId}</strong>
        </div>
        <Link to="/" className="checkout-btn-home">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No tienes productos para comprar</h2>
        <Link to="/" className="checkout-btn-home">Volver a la tienda</Link>
      </div>
    );
  }
  return (
    <div className="checkout-container">
      <h2>Finaliza tu compra</h2>
      <p>Completa tus datos para generar la orden.</p>
      
      <form onSubmit={manejadorSubmit} className="checkout-form">
        <div className="checkout-field">
          <label>Nombre Completo</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ej: Juan Pérez"
          />
        </div>
        
        <div className="checkout-field">
          <label>Teléfono</label>
          <input 
            type="tel" 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} 
            placeholder="Ej: 999888777"
          />
        </div>
        
        <div className="checkout-field">
          <label>Correo Electrónico</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="ejemplo@correo.com"
          />
        </div>
        
        <div className="checkout-field">
          <label>Confirmar Correo</label>
          <input 
            type="email" 
            value={emailConfirmacion} 
            onChange={(e) => setEmailConfirmacion(e.target.value)} 
            placeholder="ejemplo@correo.com"
          />
        </div>

        {error && <p className="checkout-error">{error}</p>}

        <button type="submit" className="checkout-submit-btn">
          Confirmar y Pagar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;