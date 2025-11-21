import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import "./Cart.css"
import { Link } from 'react-router-dom'



const Cart = () => {

  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío :,( </h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }



  return (
    <div>
      {
        cart.map((ProductCart) => (
          <div key={ProductCart.id}>
            <h2>{ProductCart.name}</h2>
            <img src={ProductCart.img} alt="" />
            <p>Cantidad: {ProductCart.quantity}</p>
            <p>Precio unitario: {ProductCart.price}</p>
            <p>Subtotal: {ProductCart.price * ProductCart.quantity}</p>
            <button onClick={() => deleteProductById(ProductCart.id)}>Eliminar</button>
          </div>
        ))
      }
      <h2>Total: {totalPrice()}</h2>
      <button onClick={deleteCart}>Vaciar carrito</button>
    </div>

  )
}

export default Cart