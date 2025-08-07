 import Estilos from './Footer.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Tabacos La Habana. Todos los derechos reservados.</p>
        <p>Diseñada con pasión para amantes del buen tabaco.</p>
      </div>
    </footer>
  )
}

export default Footer