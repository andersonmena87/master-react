import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Global } from '../../helpers/Global';
import { SerializeForm } from '../../helpers/SerializeForm';
import { getDataLocal } from '../../helpers/LocalStorage';

export const Config = () => {

  const { auth } = useAuth();
  const [saved, setSaved] = useState('not-saved');

  const updateUser = async(e) => {
    e.preventDefault();

    // Recoger datos del formulario
    let newDataUser = SerializeForm(e.target);

    // Borrar propiedad innecesaria
    delete newDataUser.file0;

    // Actualizar usuario en la base datos
    const request = await fetch(Global.url + 'user/update', {
      method: 'PUT',
      body: JSON.stringify(newDataUser),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getDataLocal('token')
      }
    });

    const data = await request.json();

    if(data.status === 'success'){
      setSaved('saved')
    }else{
      setSaved('error')
    }
  }

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Ajustes</h1>
      </header>

      <div className="content__posts">
        {
          saved === 'saved' &&
          <strong className="alert alert-success">Usuario actualizado correctamente!!</strong>
        }

        {
          saved === 'error' &&
          <strong className="alert alert-danger">El usuario no se ha actualizado!!</strong>
        }

        <form className="config-form" onSubmit={updateUser}>

          <div className="form-group">
            <label htmlFor='name'>Nombre</label>
            <input type="text" name="name" defaultValue={auth.name} />
          </div>

          <div className="form-group">
            <label htmlFor='surname'>Apellido</label>
            <input type="text" name="surname" defaultValue={auth.surname} />
          </div>

          <div className="form-group">
            <label htmlFor='nick'>Nick</label>
            <input type="text" name="nick" defaultValue={auth.nick} />
          </div>

          <div className="form-group">
            <label htmlFor='email'>Correo electrónico</label>
            <input type="email" name="email" defaultValue={auth.email} />
          </div>

          <div className="form-group">
            <label htmlFor='password'>Contraseña</label>
            <input type="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor='file0'>Avatar</label>
            <div className="general-info__container-avatar">
              {auth.image !== 'default.png' &&
                <img src={Global.url + "user/avatar/" + auth.image} className="container-avatar__img" alt="Foto de perfil" />
              }

              {auth.image === 'default.png' &&
                <img src={avatar} className="container-avatar__img" alt="Foto de perfil" />
              }
            </div>
            <input type='file' name='file0' id='file' />
            <br />
          </div>
          <br />
          <button type='submit' className='btn btn-success'>Registrate</button>

        </form>
      </div>
    </>
  )
}
