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


  const getArticulo = async() => {
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
      alert('Articulo actualizado!');
      navegar('/articulos');
    }else{
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
        <form onSubmit={ guardarArticulo } className='mi-formulario'>
        <input name='titulo' placeholder='Titulo' defaultValue={formulario.titulo} onInput={ cambiado }/>
        <textarea name='contenido' placeholder='contenido' defaultValue={formulario.contenido} onInput={ cambiado }/>
        <input type='submit' value='Guardar' />
      </form>
      }
    </div>
  )
}
