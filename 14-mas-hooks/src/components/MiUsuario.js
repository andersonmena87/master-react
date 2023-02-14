import React, { useEffect, useState } from 'react';
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {
    const [url, setUrl] = useState('https://reqres.in/api/users/1');
    const {datos, cargando} = useAjax(url);

    const getId = e => {
        const { target } = e;
        let id = target.value;
        setUrl(`https://reqres.in/api/users/`+id);
    }

  return (
    <div>
        <h1>Mi usuario:</h1>
        <p>{cargando ? 'Cargando...': ''}</p>
        <p>Datos del usuario: {datos?.first_name} {datos?.last_name}</p>
        <pre className='codigo'>{JSON.stringify(datos)}</pre>
        <input type='number' name='id' placeholder='Id usuario' onChange={ getId } />
    </div>
  )
}
