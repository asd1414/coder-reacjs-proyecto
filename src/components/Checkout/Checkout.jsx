import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import './Checkout.css'


const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""

  })



  const [orderId, setOrderId] = useState(null);



  const { cart, totalPrice } = useContext(CartContext);


  const handleChangeInput = (event) => {

    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }


  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    }

    uploadOrder(order);
  }

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id);


    } catch (error) {
      console.log("error al subir la orden de compra")
    }

  }




  return (
    <div className="checkout-container">
      {
        orderId ? (
          <div>
            <h2>Orden generada correctamente</h2>
            <p>Guarde el identificador de su compra: {orderId}</p>
          </div>
        ) : (
          <div className="form-checkout-container">
            <form onSubmit={sendOrder}>
              <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre Completo" />
              <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Número de Teléfono" />
              <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="Correo Electrónico" />
              <button type="submit">Finalizar Compra</button>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default Checkout