import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';

export const Editar = () => {
  const { id } = useParams();
  const { formulario, setFormulario, cambiado } = useForm();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const navegar = useNavigate();


  const getArticulo = async () => {
    const { datos } = await Ajax(Global.urlApi + 'articulo/' + id);
    setFormulario(datos.articulo);
    setCargando(false);
  }

  useEffect(() => {
    getArticulo();
  }, []);

  const guardarArticulo = async (e) => {
    e.preventDefault();
    setError('');
    let { datos, cargando } = await Ajax(Global.urlApi + 'articulo/' + formulario._id, 'PUT', formulario);

    if (datos.status === 'success') {
      const fileInput = document.querySelector("#file");

      if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);

        const subir = await Ajax(Global.urlApi + 'subir-imagen/' + datos.articulo._id, 'POST', formData, true);

        if (subir.datos.status !== 'success') {
          setError(subir.datos.mensaje);
        }
      }

      if(error === ''){
        alert('Articulo actualizado!');
        navegar('/articulos');
      }else{
        alert(error);
      }
      
    } else {
      setError(datos.mensaje);
    }

    setCargando(cargando);

  }

  return (
    <div>
      <h1>Editar articulo</h1>
      {error &&
        <strong className='error'>{error}!</strong>
      }
      {!cargando &&
        <form onSubmit={guardarArticulo} className='mi-formulario'>
          <input name='titulo' placeholder='Titulo' defaultValue={formulario.titulo} onInput={cambiado} />
          <textarea name='contenido' placeholder='contenido' defaultValue={formulario.contenido} onInput={cambiado} />
          <div className='mascara'>
            {formulario.imagen &&
              <img src={Global.urlApi + 'imagen/' + formulario.imagen} />
            }
          </div>
          <input type='file' name='file0' id='file' />
          <input type='submit' value='Guardar' />
        </form>
      }
    </div>
  )
}
