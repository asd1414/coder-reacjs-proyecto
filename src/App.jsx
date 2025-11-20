import NavBar from "./components/NavBar/NavBar";
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  

  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting= { "Bienvenidos a la mejor tienda de juegos" } />



    </div>
  )
}

export default App
