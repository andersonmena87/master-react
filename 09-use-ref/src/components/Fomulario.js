import { useRef } from 'react'

export const Fomulario = () => {

  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const caja = useRef();

  const mostrarDatos = e => {
    e.preventDefault();

    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    // Destructuración con alias a la variable current se le pone el alias cajaDiv
    let {current: cajaDiv} = caja;

    cajaDiv.classList.add('caja-verde');
    cajaDiv.innerHTML = 'Formulario enviado!';
  }

  return (
    <div>
      <h1>Formulario</h1>
      <div className='caja' ref={caja}>
        Pruebas con useRef
      </div>
      <form onSubmit={mostrarDatos}>
        <input type='text' placeholder='Nombre'  ref={nombreInput}/><br />
        <input type='text' placeholder='Apellido' ref={apellidoInput}/><br />
        <input type='email' placeholder='Correo electronico' ref={emailInput}/><br />
        <button type='submit'>Enviar</button>
        <button type='button' onClick={() => nombreInput.current.select()}>Focus campo nombre</button>
      </form>
    </div>
  )
}
