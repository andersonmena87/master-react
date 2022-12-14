export const GuardarElementoEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(elemento);
    }else{
        //Crear un array con el elemento
        elementos = [elemento];
    }

    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto
    return elemento;

};

export const GuardarArrayEnStorage = (clave, elementos) => {
    LimpiarDatosStorage(clave);

    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

};

export const ObtenerDatosStorage = (clave) => {
    let elementos = JSON.parse(localStorage.getItem(clave));

    return Array.isArray(elementos) ? elementos : [];
};

export const BorrarElementoStorage = (clave, id) => {
    //Conseguir datos elementos
    let elementos = ObtenerDatosStorage(clave);

    //Filtrar esos elementos para que elimine del array
    let nuevosElementos = elementos.filter(item => item.id !== parseInt(id));

    //Actualizar los datos 
    LimpiarDatosStorage(clave);

    nuevosElementos.length > 0 && GuardarElementoEnStorage(clave, nuevosElementos);

    return nuevosElementos;
}

export const LimpiarDatosStorage = (clave) => {
    localStorage.removeItem(clave);
}