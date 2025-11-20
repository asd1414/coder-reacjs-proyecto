import logo from "./gameverselogo.jpg";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {

  return (
    <nav className="navbar">
      <Link to ="/">
        <img src={logo} className="gameverseLogo" alt="" />
      </Link>

      <ul className="categorias">
        <li>
          <Link to="/category/RPG" >RPG</Link>
        </li>
        <li>
          <Link to="/category/Accion" >Accion/Aventura</Link>
        </li>
        <li>
          <Link to="/category/Survival" >Survival</Link>
        </li>
        <li><Link to="/category/RTS" >RTS</Link></li>
        <li>
          <Link to="/category/Shooter" >Shooter</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar