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
    <div className="itemDetail">
      <h2>{product.name}</h2>
      <p className="price">Precio: ${product.price}</p>
      <img src={product.img} alt={product.name} />
      <p className="description">{product.description}</p>
      <p className="stock">Nos quedan {product.stock} unidades</p>
      <ItemCount stock={product.stock} addToCart={addToCart} />
      <p className="shipping">Envíos a todo el país</p>
    </div>
  )
}

export default ItemDetail