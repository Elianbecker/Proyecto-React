import React from "react";
import { Link } from "react-router-dom";
import useCarrito from "../Store/ProductoStore.jsx";

export default function Carrito() {
  const carrito = useCarrito((state) => state.carrito);
  const eliminarDelCarrito = useCarrito((state) => state.eliminarDelCarrito);
  const modificarCantidad = useCarrito((state) => state.modificarCantidad);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
        <h2>Tu carrito está vacío.</h2>
        <Link to="/" style={{ color: "#8B4513" }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2>Carrito de compras</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {carrito.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1rem",
            }}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{ width: 80, borderRadius: 8, marginRight: "1rem" }}
            />
            <div style={{ flexGrow: 1 }}>
              <h3>{item.nombre}</h3>
              <p>${item.precio.toFixed(2)}</p>
              <label>
                Cantidad:
                <input
                  type="number"
                  min="1"
                  value={item.cantidad}
                  onChange={(e) =>
                    modificarCantidad(item.id, Math.max(1, Number(e.target.value)))
                  }
                  style={{ width: 60, marginLeft: "0.5rem" }}
                />
              </label>
            </div>
            <button
              onClick={() => eliminarDelCarrito(item.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "0.5rem",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link
        to="/checkout"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#8B4513",
          color: "white",
          borderRadius: 4,
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Finalizar compra
      </Link>
    </div>
  );
}