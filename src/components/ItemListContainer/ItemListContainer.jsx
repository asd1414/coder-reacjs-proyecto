import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
      setProducts(data)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const getProductsByCategory = async () => {
    try {
      const q = query(productsRef, where("category", "==", category));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
      setProducts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }

  }




  useEffect(() => {
    if(category)  {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [category]);



 return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
      {
        loading ? <p>Cargando productos...</p> : <ItemList products={products} />

      }
    </div>
  )
}

export default ItemListContainer