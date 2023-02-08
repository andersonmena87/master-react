import React, { useReducer, useEffect } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

// Se deja fuera porque no hace parte del componente,
// es parte del reducer
const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {

  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = e => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descipcion: e.target.descripcion.value
    }

    console.log(juego);

    //Objeto que se le va ha pasar el reducer
    const action = {
      type: 'crear',
      payload: juego
    }

    dispatch(action);

    console.log(juegos);
  }

  const borrarJuego = (e, id) => {
    e.preventDefault();
    console.log(id);

    let newJuegos = juegos.filter(juego => juego.id !== id);

    let action = {
      type: 'borrar',
      payload: newJuegos
    }

    localStorage.removeItem('juegos');

    dispatch(action);
  }

  return (
    <div>
        <h1>Estos son mis video juegos</h1>
        <p>Número de video juegos: {juegos.length}</p>
        
          <ul>
          {
            juegos.map((juego) => (
              <li key={juego.id}>
                {juego.titulo}
                &nbsp;<button onClick={ e => borrarJuego(e, juego.id)}>Borrar</button>
              </li>
            ))
          }
        </ul>
        

        <h2>Agregar juego</h2>

        <form onSubmit={conseguirDatosForm}>
          <input name="titulo" type="text" placeholder='Titulo' />
          <textarea name="descripcion" placeholder='Descripción'></textarea>
          <button type='submit'>Guardar</button>
        </form>
    </div>
  )
}
