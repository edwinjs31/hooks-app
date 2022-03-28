import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({hadleAddTodo}) => {
     //custom hook propio para manejar formularios,enviamos la descripcion de la tarea
     const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion de espacios vacios al agregar tareas
        if (description.trim().length <= 1) {
            return;//que no haga nada
        }

        //creamos una nueva tarea
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
     
        //enviamos el nuevo todo 
        hadleAddTodo(newTodo);

        //reseteamos o limpiamos el imput despues de agregar tareas
        reset();
    }

    return (
        <>
            <h4 className='text-center'>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className='form-form-control'
                    type="text"
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange} />

                <button type='submit' className='btn btn-outline-success mx-1'>Agregar</button>
            </form>
        </>
    )
}
