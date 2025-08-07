import productos from '../Datos/Productos'
import Productos from '../Componentes/Productos'
import './Home.css'

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
