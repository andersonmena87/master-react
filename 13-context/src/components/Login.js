import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const { setUsuario } = useContext(PruebaContext);
  const navegar = useNavigate();

  const enviar = e => {
    e.preventDefault();
    
    let usuario_identificado = {
      userName: e.target.userName.value,
      nombre: e.target.nombre.value,
      ciudad: e.target.ciudad.value,
    }

    setUsuario(usuario_identificado);
    navegar('/inicio');
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p></p>
      <form className='login' onSubmit={ enviar }>
        <input type='text' name='userName' placeholder='Username:'/>
        <input type='text' name='nombre' placeholder='Nombre:'/>
        <input type='text' name='ciudad' placeholder='Ciudad:'/>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
