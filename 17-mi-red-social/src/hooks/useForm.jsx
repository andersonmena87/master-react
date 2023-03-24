import React, { useState } from 'react';

export const useForm = (initObj = {}) => {

    const [form, setForm] = useState(initObj);

    const changed = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {
        form,
        changed
    };
}
