 import { Routes, Route } from 'react-router-dom'
import Home from './Paginas/Home'
import DetalleProducto from './Paginas/DetalleProducto'
import Carta from './Paginas/Carta'
import Contacto from './Paginas/Contacto'
import Navbar from './Componentes/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Inicio" element= {<Home />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carta />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
________________________________________
