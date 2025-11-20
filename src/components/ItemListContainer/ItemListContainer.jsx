import getProducts from "../../data/products.js"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"





const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState (true);



  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if (category) {
          const productsFilter = data.filter( (product) => product.category === category)
          setProducts(productsFilter);
        }else{
          setProducts(data)
        }
        
      })
      .finally(() => {
        setLoading(false);
      })



  }, [category])




  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
      {
        loading ? <p>Cargando productos...</p> :   <ItemList products={products} />

      }
    </div>
  )
}

export default ItemListContainer