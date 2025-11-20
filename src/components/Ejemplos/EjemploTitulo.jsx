import { useEffect } from 'react'

const EjemploTitulo = () => {

  useEffect(() => {

    const mostrarAnchoVentana = () => {
      console.log("Ancho", window.innerWidth)
    }

    window.addEventListener('resize', mostrarAnchoVentana);

    // esta funcion se ejecuta cuando el componente se desmonta

    return () => {
      window.removeEventListener('resize', mostrarAnchoVentana);
    }
  }, [])




  return (
    <div>EjemploTitulo</div>
  )
}

export default EjemploTitulo