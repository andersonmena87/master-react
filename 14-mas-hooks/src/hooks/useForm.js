import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
    const [ formulario, setFormulario ] = useState({});

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

        let curso = serializarFormulario(target);

        console.log(curso)
        setFormulario(curso);
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
        enviar
    }
}