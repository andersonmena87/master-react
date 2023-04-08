import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const MiFormulario = () => {
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
                .min(3, 'El nombre es muy corto')
                .max(40, 'El nombre es muy largo')
                .required("Campo requerido"),
        email: Yup.string()
        .email('Email invalido')
        .min(3, 'El nombre es muy corto')
        .max(40, 'El nombre es muy largo')
        .required("Campo requerido"),
    });

    const formik = useFormik({
        initialValues: {
            nombre: 'Clark kent',
            email: 'clark@yopmail.com'
        },
        validationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <h1>Mi formulario con formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' name='nombre' id='name'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                    />
                    <div className='error'>{formik.errors.nombre && formik.touched.nombre && formik.errors.nombre }</div>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div className='error'>{formik.errors.email && formik.touched.email && formik.errors.email }</div>
                </div>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
