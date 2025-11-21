import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = {...product, quantity: count};
    addProduct(newProduct);
  }





  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>Nos quedan {product.stock} unidades</p>
      <ItemCount stock={product.stock} addToCart={addToCart} />
      <p>Envios a todo el pais</p>

    </div>
  )
}

export default ItemDetail