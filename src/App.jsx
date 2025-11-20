import NavBar from "./components/NavBar/NavBar";
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la mejor tienda de juegos fisicos"} />} />
          <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a la mejor tienda de juegos"} />} />
          <><Route path="/detail/:id" element={<ItemDetailContainer />} /></>
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />


          

        </Routes>


      </BrowserRouter>




    </div>
  )
}

export default App
