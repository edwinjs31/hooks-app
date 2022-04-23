import { useState } from "react";

//CUSTOM KOOK QUE SE ENCARGA DE MANEJAR LOS FORMULARIOS
//si no recibe nada el valor inicial es un objeto vacio
export const useForm = (initialState = {}) => {
    //recibe un objeto con los datos/campos del formulario al cual se quiere modificar
    const [formValue, setValueForm] = useState(initialState);

    //para inicializar el formulario es decir resetear o limpiar
    const reset = () => {
        setValueForm(initialState);
    }

    //evento onChange, para cambiar el valor de los elementos
    const handleInputChange = ({ target }) => {
        setValueForm({ ...formValue, [target.name]: target.value });
    };

    //retornamos el objeto con los datos del form,la funcion del evento y la funcion reset
    return [formValue, handleInputChange, reset];
};
