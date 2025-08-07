import productos from '../Datos/Productosroductos'
import Productos from '../Componentes/Productos'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <h1>Catálogo de Tabacos</h1>
      <div className="productos-grid">
        {productos.map((prod) => (
          <Productos key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  )
}

export default Home
