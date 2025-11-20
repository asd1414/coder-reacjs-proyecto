import "./item.css"


const Item = ({ product }) => {
  return (
    <div className="item">
      <p>{product.name}</p>
      {product.img ? (
        <img src={product.img} alt={product.name} />
      ) : (
        <p>Vidriera en preparacion xD</p>        
      )}
      <p>Precio: {product.price}</p>
    </div>
  );
};


export default Item;
