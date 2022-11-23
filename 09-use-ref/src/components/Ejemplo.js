import { useEffect, useRef, useState } from 'react';

export const Ejemplo = () => {

    const [numeroSaludos, setNumeroSaludos] = useState(0);

    // Haciendo referencia a un estado
    const saludoEnCola = useRef(numeroSaludos);
    useEffect(() =>{
        saludoEnCola.current = numeroSaludos;
        setTimeout(() => {
            console.log('Número de saludos en cola ' + saludoEnCola.current);
        }, 3000)
    }, [numeroSaludos]);


    const enviarSaludo = e => {
        setNumeroSaludos(numeroSaludos + 1);
    }

    return (
        <div>
            <h1>Ejemplo</h1>
            <h2>Saludos enviados: {numeroSaludos}</h2>
            <button onClick={ enviarSaludo }>Enviar saludo</button>
            <hr />
        </div>
    )
}
