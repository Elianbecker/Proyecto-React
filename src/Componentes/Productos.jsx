 import { Link } from 'react-router-dom'
import styles from './ProductCard.module.scss'

const Productos = ({ producto }) => {
  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <strong>${producto.precio}</strong>
      <Link to={`/producto/${producto.id}`}>Ver más</Link>
    </div>
  )
}

export default Productos