import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ajax } from '../../helpers/Ajax';
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/Global';

export const Crear = () => {
  const { formulario, enviar, cambiado } = useForm();
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const navegar = useNavigate();

  const guardarArticulo = async (e) => {
    setError("");
    e.preventDefault();
    let { datos, cargando } = await Ajax(Global.urlApi + 'crear', 'POST', formulario);

    if (datos.status === 'success') {
      //Subir imagen
      const fileInput = document.querySelector("#file");

      if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);

        const subir = await Ajax(Global.urlApi + 'subir-imagen/' + datos.articulo._id, 'POST', formData, true);

        if (subir.datos.status !== 'success') {
          setError(subir.datos.mensaje);
        }
      }
    } else {
      setError(datos.mensaje);
    }

    setCargando(cargando);

    if (error === '') {
      alert('Articulo guardado!');
      navegar('/articulos');
    }
  }

  return (
    <div className='card'>
      <h1>Crear artículo</h1>
      {
        error &&
        <strong className='error'>{error}!</strong>
      }

      {!cargando &&
        <form onSubmit={guardarArticulo} className='mi-formulario'>
          <input name='titulo' placeholder='Titulo' onChange={cambiado} />
          <textarea name='contenido' placeholder='contenido' onChange={cambiado} />
          <input type='file' name='file0' id='file' />
          <input type='submit' value='Guardar' />
        </form>
      }
    </div>
  )
}
