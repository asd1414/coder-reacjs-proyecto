import './FormCheckOut.css'




const FormCheckOut = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <div>
      <form onSubmit={sendOrder}>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre Completo" />
      <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Numero de Telefono"/>
      <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="Correo Electronico"/>
      
      <button type="submit">Finalizar Compra</button>
      
      </form>
    </div>
  )
}

export default FormCheckOut