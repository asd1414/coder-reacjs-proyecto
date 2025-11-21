import { BsCart   } from "react-icons/bs";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  const quantity = totalQuantity();


  return (
    <Link to="/cart" className="cartWidget">
        
        <BsCart className="carrito"/>
        <p className="contadorCarrito">{quantity !== 0 && quantity}</p>
    </Link>
  )
}

export default CartWidget