 import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Paginas/Home.jsx";
import Carrito from "./Paginas/Carrito.jsx";
import DetalleProducto from "./Paginas/DetalleProducto.jsx";
import Checkout from "./Paginas/Checkout.jsx";
import useCarrito from "./Store/ProductoStore.jsx";
import "./App.css";
import Footer from "./Componentes/Footer.jsx";
import Contacto from "./Paginas/Contacto.jsx";

export default function App() {
  const carrito = useCarrito((state) => state.carrito);

  return (
    <div className="app-container">
      <header className="header">
        <h1>TABACOS LA HABANA</h1>
        <nav>
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/carrito" className="nav-link">
            Carrito ({carrito.length})
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </div>
  );
}
