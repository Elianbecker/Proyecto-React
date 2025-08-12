import React from "react";
import productos from "../Datos/Productos.js";
import useCarrito from "../Store/ProductoStore.jsx";
import { Link } from "react-router-dom";
import "../Estilos/Home.module.css";

export default function Home() {
  const agregarAlCarrito = useCarrito((state) => state.agregarAlCarrito);

  return (
    <div className="container">
      <h2>Catálogo de Habanos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <Link to={`/producto/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} />
            </Link>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <strong>${producto.precio}</strong>
            <button
              onClick={() => agregarAlCarrito(producto, 1)}
              className="btn-agregar"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}