
const Item = ({ product }) => {
  return (
    <div className="item">
      <p>{product.name}</p>
      <p>Precio: {product.price}</p>
      <p>{product.img}</p>
    </div>
  )
}

export default Item