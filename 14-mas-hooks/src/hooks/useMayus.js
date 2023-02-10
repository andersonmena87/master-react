import { useState } from 'react';

export const useMayus = (texto_entrada) => {

    const [texto, setTexto] = useState(texto_entrada);

    const mayuscula = () => {
        setTexto(texto.toUpperCase());
    }

    const minuscula = () => {
        setTexto(texto.toLowerCase());
    }

    const concatenar = (valor) => {
        setTexto(`${texto} ${valor}`);
    }

    return {
        estado: texto,
        mayuscula,
        minuscula,
        concatenar
    }
}