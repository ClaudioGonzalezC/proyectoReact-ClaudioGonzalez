import { useState } from "react";
import TituloDinamico from "../../common/tituloDinamico/TituloDinamico";
import CartWidget from "../../common/cartWidget/CartWidget"; // Asegúrate de ajustar la ruta si es diferente
import "./navbar.css";

const Navbar = () => {
const [ darkMode, setDarkMode ] = useState(true);
const toggleMode = () => {
  setDarkMode(!darkMode);
}
  return (
    <div className={darkMode ? 'containerNavDark' : 'containerNav'}>
      <TituloDinamico />
      <ul>
        <li><a href="#">¿Qué es la sorpresa de tu vida?</a></li>
        <li><a href="#">Suscripciones</a></li>
        <li><a href="#">Mi Cuenta</a></li>
      </ul>
      <button onClick={toggleMode}>Cambiar modo</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;