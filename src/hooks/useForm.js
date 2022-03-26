import { useState } from "react";

//CUSTOM KOOK QUE SE ENCARGA DE MANEJAR LOS FORMULARIOS
export const useForm = (initialState = {}) => {

    const [valueForm, setValueForm] = useState(initialState);

    //evento onChange, para cambiar el valor de los elementos
    const handleInputChange = ({ target }) => {
        setValueForm({ ...valueForm, [target.name]: target.value });
    };

    //retornamos el objeto con los datos del form y la funcion del evento
    return [valueForm,handleInputChange];
};
