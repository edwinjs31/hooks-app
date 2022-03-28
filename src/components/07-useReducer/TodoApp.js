import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import '../07-useReducer/sytyle.css';
import { todoReducer } from './todoReducer';

//APLICANDO USEREDUCE CON: initialState e init(obtiene los mismos resultado)

/*
//opcion 1 con initialState
const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}];
*/

//opcion 2 con init
const init = () => {
    //RECUPERANDO DATOS DEL LOCALSTORAGE=======================================
    //recuperamos datos del localStorage, si no hay datos devulve un Array vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
    //===========================================================================
    /*
    return [{
        id: new Date().getTime(),
        desc: 'Aprender react',
        done: false
    }]*/
}

export const TodoApp = () => {
    //opcion 1
    //const [todos, dispatch] = useReducer(todoReducer, initialState);

    //opcion 2: se pasa por defecto un Array vacio
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //custom hook propio para manejar formularios,enviamos la descripcion de la tarea
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    //GUARDANDO DATOS EN EL LOCALSTORAGE
    //==============================================================================
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);//guardará solo cuando los 'todos' cambien,incluyendo el estado inicial
    //=================================================================================


    //EVENTO SUBMIT DEL FURMULARIO QUE SE ENCARGA DE PROCESAR LOS DATOS DEL FORMULARIO
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
        //creamos la accion
        const action = {
            type: 'add',
            payload: newTodo
        }

        //se envia la accion 
        dispatch(action);

        //reseteamos o limpiamos el imput despues de agregar tareas
        reset();
    }


    //EVENTO PARA ELIMINAR UN TODO 
    const handleDelete = (todoId) => {
        //creamos la accion
        const action = {
            type: 'delete',
            payload: todoId
        }

        //evniamos la accion
        dispatch(action);
    }


    //EVENTO PARA MARCAR LA TAREA COMO COMPLETADA O PENDIENTE
    const hangleToggle = (todoId) => {
        //creamos la accion directamente en el dispatch
        dispatch({ type: 'toggle', payload: todoId });
    }



    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            <div className='row'>
                {/* Columna de tareas */}
                <div className='col-sm-5'>
                    <h4 className='text-center'>Tareas({todos.length})</h4>
                    <hr />
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id} className="list-group-item">
                                {/* Si 'done' es true retorna el nombre de una clase, si no no hace nada */}
                                    <p onClick={() => hangleToggle(todo.id)} className={`${todo.done && 'complete'}`}>
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button onClick={() => handleDelete(todo.id)} className='btn btn-outline-danger'>Borrar</button>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                {/* Columna de opciones */}
                <div className='col-sm-5'>
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
                </div>
            </div>
        </div>
    )
}
