import React from 'react'
import PropTypes  from 'prop-types'; //Validar el tipo de propiedad

// Usando props directamente
// export const TercerComponente = (props) => {
//   console.log(props);

// //   Destructuring
//   const {nombre, apellidos, otros}  = props;

//   return (
//     <div>
//         <h1>Comunicación entre componentes</h1>
//         <ul>
//             <li>{props.nombre}</li>
//             <li>{props.apellidos}</li>
//             <li>{props.otros.altura}</li>
//             <li>{props.otros.peso}</li>
//         </ul>
//     </div>
//   )

// Usando destructuring en lo que recibe;
// propiedad parametroDefault se le asigna un valor por defecto, se puede dar un valor por defecto con cualquier parametro
export const TercerComponente = ({nombre, apellidos, otros, parametroDefault = 'parametro que no recibe el componente', parametroDefaultProps}) => {
  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{otros.altura}</li>
            <li>{otros.peso}</li>
            <li>{parametroDefault}</li>
            <li>{parametroDefaultProps}</li>
        </ul>
    </div>
  )
}

// Validar el tipo de las propiedades
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired, //Tipo string y requerido
    apellidos: PropTypes.string,
    otros: PropTypes.object 
}

//Parametros por defecto
TercerComponente.defaultProps = {
    nombre: "Juan",
    apellidos: "Martinez",
    parametroDefaultProps: "Parametro desde el defultPorps",
}
