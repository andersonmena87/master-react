//Import dependencias
import React from 'react'

//Función
//El return del componente no necesita () si solo se retorna una etiqueta de html
// const MiPrimerCoponente = () => {
//     return <p>Mi primer componente</p>
// }

// Para multiples etiquetas se debe usar un contenedor, puede ser cualquier etiqueta contenedora de html(div, section)
// O se pueder usar <></>
const MiPrimerCoponente = () => {

    const nombre = 'Anderson';
    const lenguajes = ['React', 'Angular', '.Net'];

  return (
    <>
      <h2>Componente creado</h2>
      <h3>Datos de usuario</h3>
      <ul>
        <li>Nombre: <strong>{nombre}</strong></li>
        <li>Lenguajes: <strong>{lenguajes.join(', ')}</strong></li>
      </ul>
      <p>Mi primer componente</p>
      <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </>
  )
}

//Export

export default MiPrimerCoponente
