import logo from "./gameverselogo.jpg";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";


const NavBar = () => {

  return (
    <nav className="navbar">
      <img src={logo} className="gameverseLogo" alt="" />
      <ul className="categorias">
        <li>RPG</li>
        <li>Survival</li>
        <li>Shooter</li>
        <li>RTS</li>
      </ul>
      
      <CartWidget />
    </nav>
  )
}

export default NavBar