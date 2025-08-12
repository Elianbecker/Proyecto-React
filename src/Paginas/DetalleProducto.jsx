import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../Datos/Productos.js";
import useCarrito from "../Store/ProductoStore.jsx";

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));
  const agregarAlCarrito = useCarrito((state) => state.agregarAlCarrito);

  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const manejarAgregar = () => {
    agregarAlCarrito(producto, cantidad);
    alert(`Agregaste ${cantidad} "${producto.nombre}" al carrito.`);
  };

  return (
    <>
      <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ width: "100%", borderRadius: 8 }}
        />
        <h2 style={{ marginTop: "1rem" }}>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <strong style={{ fontSize: "1.25rem" }}>${producto.precio}</strong>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="cantidad" style={{ marginRight: "0.5rem" }}>
            Cantidad:
          </label>
          <input
            id="cantidad"
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(Math.max(1, Number(e.target.value)))}
            style={{ width: 60, padding: "0.25rem" }}
          />
        </div>

        <button
          onClick={manejarAgregar}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#8B4513",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}