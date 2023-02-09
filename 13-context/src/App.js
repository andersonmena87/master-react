import React, { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { RouterPrincipal } from './routers/RouterPrincipal';

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    // SE EJECUTA LA PRIMERA VEZ QUE SE CARGA EL COMPONENTE
    
    let usuario_local = JSON.parse(localStorage.getItem('usuario'));
    console.log('usuario_local', usuario_local);
    if(usuario_local.hasOwnProperty('userName')){
      setUsuario(usuario_local);
    }
  }, []);

  useEffect(() => {
    // SE EJECUTA CADA VEZ QUE SE ACTUALICE EL ESTADO 
    console.log('guardando usuario LS', usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className="App">
        <PruebaContext.Provider value={{usuario, setUsuario}}>
          <RouterPrincipal />
        </PruebaContext.Provider>
    </div>
  );
}

export default App;
