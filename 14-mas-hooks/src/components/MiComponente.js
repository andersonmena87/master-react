import React, { useId } from 'react'

export const MiComponente = () => {

//   EL HOOK CREA UN IDENTIFICADOR UNICO  
  const id = useId();
  const segundo_id  = useId();

  console.log('Primer id', id);
  console.log('Segundo id', segundo_id);

  return (
    <div>
        <h1>Hook useID</h1>
        <input id={id} name='nombre' placeholder='Nombre' />
    </div>
  )
}
