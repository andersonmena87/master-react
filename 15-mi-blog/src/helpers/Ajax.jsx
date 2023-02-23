export const Ajax = async (url, metodo = "GET", datosGuardar, archivos = false) => {
    let cargando = true;
    let opciones = {
        method: metodo
    }

    if (metodo == 'POST' || metodo == 'PUT') {
        if(archivos){
            opciones = {
                method: metodo,
                body: datosGuardar
            }
        }else{
            opciones = {
                method: metodo,
                body: JSON.stringify(datosGuardar),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
    }

    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();
    cargando = false;

    return {
        datos,
        cargando
    }
};