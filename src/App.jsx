import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Stray from "./assets/img/Stray-principal.jpg"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import EjemploContador from "./components/Ejemplos/EjemploContador";

function App() {
  

  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting= { "Bienvenidos a la mejor tienda de juegos" } />
      <h1>titulo h1</h1>

      <img src={Stray} alt="" />
      <EjemploContador />


    </div>
  )
}

export default App
