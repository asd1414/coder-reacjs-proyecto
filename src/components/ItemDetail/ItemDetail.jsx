import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

const [viewItemCount, setViewItemCount] = useState(true)

  const addToCart = (count) => {
    setViewItemCount(false)
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
      {
        viewItemCount ? (
          <ItemCount stock={product.stock} addToCart={addToCart} />
        ):(
          <Link to="/cart" className="cartWidget">Ir al carrito</Link>
        )
      }
      
      <p className="shipping">Envíos a todo el país</p>
    </div>
  )
}

export default ItemDetail