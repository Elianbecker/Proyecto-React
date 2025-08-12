 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Inicio</Link>
      <Link to="/carrito" style={{ marginRight: '1rem', color: '#fff' }}>Carrito</Link>
      <Link to="/contacto" style={{ color: '#fff' }}>Contacto</Link>
    </nav>
  )
}

export default Navbar
________________________________________
