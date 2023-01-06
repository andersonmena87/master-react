import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent =  () => {

  const [mostrar, setMostrar] = useState(false);
  const caja = useRef();
  const boton = useRef();
  // Se ejecuta antes de mostrar cosas por pantalla
  useLayoutEffect(() =>{
    console.log('useLayoutEffect: Componente cargado');

    // Obtiene caja del DOM
    // let caja = document.querySelector('#caja');
    // if(caja){
    //   caja.innerHTML = "Hola!";
    //   console.log(caja.getBoundingClientRect());
    // }
  }, []);

  // Se ejecuta al cargar la pantalla
  useEffect(() =>{
    console.log('useEffect: Componente cargado');
    
    // Si la referencia caja es nula, no ejecuta nada que este debajo del codigo
    if(caja.current == null) {return};

    const { bottom } = boton.current.getBoundingClientRect();

    console.log('pos botón', bottom);
    console.log('Boton', boton.current);
    console.log('Caja', caja.current);

    setTimeout(() => {
      caja.current.style.marginTop = `${bottom + 45}px`;
      caja.current.style.marginLeft = `${bottom + 95}px`;
      caja.current.innerHTML = 'Modificado desde ref';  
    }, 1000);
    
  }, [mostrar]);

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        {/* setMostrar tiene un parametro en el callback donde se puede capturar el valor del estado
        en este caso se usa la variable prev para capturarlo */}
        <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar mensaje</button>
        {mostrar && 
          <div id="caja" ref={caja}>
            Hola soy un texto en caja {mostrar}
          </div>
        }
        
    </div>
  )
}
