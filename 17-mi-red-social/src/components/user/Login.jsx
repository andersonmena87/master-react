import React, { useRef, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/Global';
import { saveDataLocal } from '../../helpers/LocalStorage';
import useAuth from '../../hooks/useAuth';

export const Login = () => {
  const { form, changed } = useForm({});
  const [logged, setLogged] = useState('');
  const [ messageRequest, setMessageRequest ] = useState('');
  const { setAuth } = useAuth();
  const butonIdentificate = useRef();

  const loginUser = async (e) => {
    e.preventDefault();

    // Datos del formulario
    const userToLogin = form;

    // Petición el backend
    const request = await fetch(Global.url + 'user/login', {
      method: 'POST',
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await request.json();

    if (data.status === 'success') {
      setLogged('logged');

      // Persistir datos en el navegador(LocalStorage)
      saveDataLocal(
        {
          token: data.token,
          user: data.user
        })

        // Seteamos el auth por defecto con los datos del usuario que se acaba de loguear
        setAuth(data.user);

        // Redirección despues del logueo
        
          // Deshabilitando el botón Identificate
          butonIdentificate.current.disabled = true;
          butonIdentificate.current.style.opacity = 0.5;

          // Tiempo de espera para redirección de 1seg
          setTimeout(() => {
            window.location.reload();
          }, 1000);

    } else {
      setLogged('error');
    }

    setMessageRequest(data.message);

  }

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Loguin</h1>
      </header>

      <div className="content__posts">

        {
          logged === 'logged' &&
          <strong className="alert alert-success">{messageRequest}!!</strong>
        }

        {
          logged === 'error' &&
          <strong className="alert alert-danger">{messageRequest}!!</strong>
        }

        <form className='form-login' onSubmit={loginUser}>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={changed} />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' onChange={changed} />
          </div>

          <button type='submit' className='btn btn-success' ref={butonIdentificate}>Identificate</button>
        </form>
      </div>
    </>
  )
}
