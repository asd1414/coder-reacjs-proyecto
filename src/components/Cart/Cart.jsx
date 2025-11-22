import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

  // Mostrar mensaje cuando el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>El carrito está vacío :(</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {
        cart.map((ProductCart) => (
          <div className="product-item" key={ProductCart.id}>
            <img src={ProductCart.img} alt={ProductCart.name} />
            <div>
              <h2>{ProductCart.name}</h2>
              <p>Cantidad: {ProductCart.quantity}</p>
              <p>Precio unitario: {ProductCart.price}</p>
              <p>Subtotal: {ProductCart.price * ProductCart.quantity}</p>
            </div>
            <button onClick={() => deleteProductById(ProductCart.id)}>Eliminar</button>
          </div>
        ))
      }
      <h2 className="total-price">Total: {totalPrice()}</h2>
      <div className="button-container">
        <Link className='button-continue-cart' to="/checkout">Realizar compra</Link>
        <button onClick={deleteCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default Cart;
