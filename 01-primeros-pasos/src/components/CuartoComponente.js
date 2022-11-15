import React from 'react'

export const CuartoComponente = () => {

//   Forma mas limpia de pasar una función a un componente  
    const eventoClick = (event) => {
        console.log(event)
        alert('-> Función evento click');
    }

    const eventoClickParametro = (event, nombre) => {
        console.log(event)
        alert(`-> Función evento click con parametro ${nombre}`);
    }

    const eventoDobleClick = (event) => {
        alert("Diste doble click!!");
    }

    const ejecutarFuncionMouse = (event, accion) => {
        alert(`Has ${accion} caja`);
    }

    const estasDentro = event => console.log("Estas dentro!");
    const estasFuera = event => console.log("Estas fuera!");

  return (
    <div>
        <h1>Eventos en react</h1>
        <p>
        <button onClick={() => {
            console.log('Hola mundo')
        }}>Evento click!</button>
        </p>
        
    <p>
    <button onClick={ eventoClick }>Evento click limpio!</button>
    </p>
    
    <p>
        <button onClick={ e => eventoClickParametro(e, "Superman") }>Evento click limpio con parametro!</button>
    </p>

    <p>
        <button onDoubleClick={ eventoDobleClick }>Evento doble click!!!</button>
    </p>
    <div id="caja"
        onMouseEnter={ e => ejecutarFuncionMouse(e, 'entrado')}
        onMouseLeave={ e => ejecutarFuncionMouse(e, 'salido')}
    >
        Pasar el mouse para ejecutar eventos
    </div>
    <div>
        <input type="text" placeholder='Introduce tu nombre'
         onFocus={ estasDentro }
        onBlur= { estasFuera }
         />
    </div>    
    </div>
  )
}
