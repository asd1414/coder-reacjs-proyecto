import { useState } from 'react'



const Contador = () => {
	const [contador, setContador] = useState(1);

	const aumentar = () => {
		if (contador < 20)
			setContador(contador + 1);

	}

	const disminuir = () => {
		if (contador > 0)
			setContador(contador - 1);
	}



	return (
		<div>
			<div>
      <p>Contador: {contador} </p>
      <button onClick={disminuir}>-</button>
      <button onClick={aumentar} >+</button>
    
    </div>
		</div>
	)
}

export default Contador