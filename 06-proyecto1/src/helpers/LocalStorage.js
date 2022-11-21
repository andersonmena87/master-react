export const GuardarEnStorage = (clave, elemento) => {

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

export const ObtenerDatosStorage = (clave) => {
    let elementos = JSON.parse(localStorage.getItem(clave));

    return Array.isArray(elementos) ? elementos : [];
};