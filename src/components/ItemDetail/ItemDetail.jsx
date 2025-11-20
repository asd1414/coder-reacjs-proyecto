import "./ItemDetail.css"
import Contador from "../Contador/Contador"


const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>Nos quedan {product.stock} unidades</p>
      <p>Envios a todo el pais</p>
      <Contador />
    </div>
  )
}

export default ItemDetail