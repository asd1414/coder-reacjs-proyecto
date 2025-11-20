import { BsCart   } from "react-icons/bs";
import "./CartWidget.css"


const CartWidget = () => {
  return (
    <div className="cartWidget">
        
        <BsCart className="carrito"/>
        <p className="contadorCarrito">2</p>
    </div>
  )
}

export default CartWidget