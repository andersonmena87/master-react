import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

  const {usuario} = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      {usuario.hasOwnProperty('nombre') && 
          <>
            <p>Bienvenido <strong>{usuario.nombre}</strong></p>
            <p>Ciudad <strong>{usuario.ciudad}</strong></p>
          </>
      }
    </div>
  )
}