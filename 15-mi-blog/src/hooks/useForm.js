import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
    const [ formulario, setFormulario ] = useState(objetoInicial);

    const serializarFormulario = formulario => {
        let objetoCompleto = {};

        const formData = new FormData(formulario);

        for(let [name, value] of formData){
            objetoCompleto[name] = value;
        }

        return objetoCompleto;
    }

    const enviar = e => {
        e.preventDefault();
        const { target } = e;

        let data = serializarFormulario(target);

        setFormulario(data);
    }

    const cambiado = ({ target }) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return {
        formulario,
        cambiado,
        enviar,
        setFormulario
    }
}