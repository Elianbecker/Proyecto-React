 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCarrito from "../Store/ProductoStore.jsx";

export default function Checkout() {
  const carrito = useCarrito((state) => state.carrito);
  const limpiarCarrito = useCarrito((state) => state.limpiarCarrito);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const manejarSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !email || !tarjeta) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (tarjeta.length < 16) {
      setError("El número de tarjeta debe tener al menos 16 dígitos.");
      return;
    }
   
    setError("");
    setExito(true);
    limpiarCarrito();

    
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (carrito.length === 0 && !exito) {
    return (
      <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
        <h2>No hay productos en el carrito.</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2>Finalizar compra</h2>
      {exito ? (
        <div style={{ color: "green", marginTop: "1rem" }}>
          <h3>¡Gracias por tu compra, {nombre}!</h3>
          <p>Te enviamos un correo a {email} con el detalle.</p>
          <p>Serás redirigido a la página principal en breve.</p>
        </div>
      ) : (
        <>
          <h3>Total a pagar: ${total.toFixed(2)}</h3>
          <form onSubmit={manejarSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            <label>
              Nombre completo:
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>

            <label>
              Número de tarjeta:
              <input
                type="text"
                value={tarjeta}
                onChange={(e) => setTarjeta(e.target.value.replace(/\D/g, ""))} // Solo números
                maxLength={16}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              type="submit"
              style={{
                padding: "0.75rem",
                backgroundColor: "#8B4513",
                color: "white",
                border: "none",
                borderRadius: 4,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Pagar
            </button>
          </form>
        </>
      )}
    </div>
  );
}