import React from 'react'

//Para iterar un arreglo y mostrar sus elementos se recomienda map
export const SegundoComponente = () => {
    const comics = ['Superman', 'Batman', 'Spiderman'];
    //const comics = [];

  // se agrega () al condicional terciario para que pueda renderizar el HTML
  return (
    <div>
        <h1>Comics</h1>
        {/*Cuando es multilinea se debe agregar parentesis()*/}
        { comics.length > 0 ?
        (
          <ul>
          {
            comics.map((comic, indice) => {
              return <li key={indice}>{comic}</li>
            })
          }
        </ul>
        )
        :
        <p>No hay comics</p>
        }
    </div>
  )
}
