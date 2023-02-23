import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ajax } from '../../helpers/Ajax';
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/Global';

export const Crear = () => {
  const { formulario, enviar } = useForm();
  const [cargando, setCargando] = useState(false);
  const navegar = useNavigate();

  useEffect(() => {
    if(Object.hasOwn(formulario, 'titulo')){
      guardarArticulo();
    }
  }, [formulario]);

  const guardarArticulo = async () => {
    let { datos, cargando } = await Ajax(Global.urlApi + 'crear', 'POST', formulario);

    if (datos.status === 'success') {
      alert('Articulo guardado!');
    }

    setCargando(cargando);
    navegar('/articulos');
  }

  return (
    <div>
      <h1>Crear articulo</h1>
      {!cargando && 
        <form onSubmit={enviar} className='mi-formulario'>
        <input name='titulo' placeholder='Titulo'/>
        <textarea name='contenido' placeholder='contenido'/>
        <input type='submit' value='Enviar' />
      </form>
      }
    </div>
  )
}
