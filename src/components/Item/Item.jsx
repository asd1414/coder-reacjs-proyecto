import "./item.css"
import { Link } from "react-router-dom";


const Item = ({ product }) => {
  return (
    <div className="item">
      <p>{product.name}</p>
      {product.img ? (
        <img src={product.img} alt={product.name} />
      ) : (
        <p>xD</p>        
      )}
      <p>Precio: {product.price}</p>
      <Link to={"/detail/"+ product.id} className="masInfoBoton">MAS INFORMACIÓN</Link>
    </div>
  );
};


export default Item;
