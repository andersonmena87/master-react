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
  const nombre = 'Anderson'
  const lenguajes = ['React', 'Angular', '.Net']
  const usuario = {
    nombre: 'Anderson',
    apellidos: 'Mena Serna',
    lenguajes: 'React, Angular, .NET',
  }

  return (
    <>
      <h2>Componente creado</h2>
      <h3>Datos de usuario variables</h3>
      <ul>
        <li>
          Nombre: <strong>{nombre}</strong>
        </li>
        <li>
          Lenguajes: <strong>{lenguajes.join(', ')}</strong>
        </li>
      </ul>
      <h3>Datos de usuario objeto</h3>
      <li>
        Nombre: <strong>{usuario.nombre}</strong>
      </li>
      <li>
        Apellidos: <strong>{usuario.apellidos}</strong>
      </li>
      <li>
        Lenguajes: <strong>{usuario.lenguajes}</strong>
      </li>
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
