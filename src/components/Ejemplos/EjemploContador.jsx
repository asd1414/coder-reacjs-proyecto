import { useState, useEffect } from 'react'
import EjemploTitulo from './EjemploTitulo';



const EjemploContador = () => {

  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    if (contador < 10)
      setContador(contador + 1);

  }

  const disminuir = () => {
    if (contador > 0)
      setContador(contador - 1);
  }

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    fetchApi();

  }, []);

  const alternarToggle = () => {
    setToggle(!toggle);
  }


  // se ejecuta solo al montar el compoonente
  // ej: llamado a una api, suscripcion a eventlistener

  useEffect(() => {
    console.log("1er useefect")
  }, [])

// se ejecuta cada vez que cambia el estado del contador
// ej: para realizar acciones especificas cuando una variable dependiente cambie  
  useEffect(() => {
    console.log("2do usefect")
  },[contador])

// se ejecuta cada vez que se actualice cualquier estado de mi componente
// operaciones de monitoreo o registro, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useefect")
  });

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={disminuir}>-</button>
      <button onClick={aumentar} >+</button>
      <p>boolean: {toggle.toString()}</p>
      <button onClick={alternarToggle}>Alternar Valor</button>
      {
        toggle && <EjemploTitulo />
      }
    </div>
  )
}

export default EjemploContador