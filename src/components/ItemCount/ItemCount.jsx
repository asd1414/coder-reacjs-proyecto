import { useState } from 'react'
import "./ItemCount.css"


const ItemCount = ({stock, addToCart}) => {
  const [count, setCount] = useState(1);

  const handleClickAumentar = () => {
    if (count < stock)
      setCount(count + 1);
  }

  const handleClickDisminuir = () => {
    if (count > 1)
      setCount(count - 1);
  }



  return (
    <div>
      <div className='cantidadYBoton'>
        <div className='itemCount'>
          <button onClick={handleClickDisminuir}>-</button>
          <p> {count}  </p>
          <button onClick={handleClickAumentar} >+</button>
        </div>

        <button className='addToCartButton' onClick={() => addToCart(count)}>Agregar al carrito</button>

      </div>
    </div>
  )
}

export default ItemCount