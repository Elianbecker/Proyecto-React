import { Link } from "react-router-dom";
import "../Estilos/Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/contacto">Contacto</Link>
      </div>
      <p>© {new Date().getFullYear()} Catálogo de Tabacos - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;

const footerStyle = {
  backgroundColor: "#8B4513",
  color: "white",
  padding: "1rem 0",
  marginTop: "2rem",
};

const containerStyle = {
  maxWidth: 960,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "0 1rem",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "1rem",
  fontWeight: "bold",
};