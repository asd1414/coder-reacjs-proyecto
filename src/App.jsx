import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

import './App.css'






function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la mejor tienda de juegos fisicos"} />} />
            <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a la mejor tienda de juegos fisicos"} />} />
            <><Route path="/detail/:id" element={<ItemDetailContainer />} /></>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2 className="error">Error 404 - Página no encontrada</h2>} />

          </Routes>

        </CartProvider>
      </BrowserRouter>




    </div>
  )
}

export default App
