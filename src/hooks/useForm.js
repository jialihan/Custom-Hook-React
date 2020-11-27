import React, { useState } from 'react';

export const useForm = (initialForm) => {

    const [formState, setFormState] = useState(initialForm);

    const inputChangedHandler = (event) => {
        const newState = {
            ...formState,
            [event.target.name]: event.target.value,
        };
        setFormState(newState);
    };

    const resetForm = () => {
        setFormState(initialForm);
    }

    // use our array structure as a tuple 
    return [formState, inputChangedHandler, resetForm];
}
