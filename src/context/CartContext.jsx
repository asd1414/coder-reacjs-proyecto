import { createContext, useState } from "react";





const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


const addProduct = (newProduct) => {
  const existingProduct = cart.find(product => product.id === newProduct.id);

  if (existingProduct) {
    const updatedCart = cart.map(product => 
      product.id === newProduct.id 
        ? { ...product, quantity: product.quantity + newProduct.quantity } 
        : product
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, newProduct]);
  }
}


const totalQuantity = () => {
  const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
  return quantity;
}

const totalPrice = () => {
  const total = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
  return total;
}

const deleteProductById = (productId) => {
  const productFiltered = cart.filter((productCart) => productCart.id !== productId);
  setCart(productFiltered);
}

const deleteCart = () => {
  setCart([]);
}

console.log(cart)


  return (
    <CartContext.Provider value={{cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
      {children}
    </CartContext.Provider>
  )

}


export { CartContext, CartProvider };