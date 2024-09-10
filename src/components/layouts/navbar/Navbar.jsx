import TituloDinamico from "../../common/tituloDinamico/TituloDinamico";
import CartWidget from "../../common/cartWidget/CartWidget"; // Asegúrate de ajustar la ruta si es diferente
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="containerNav">
      <TituloDinamico />
      <ul>
        <li><a href="#">¿Qué es la sorpresa de tu vida?</a></li>
        <li><a href="#">Suscripciones</a></li>
        <li><a href="#">Mi Cuenta</a></li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;