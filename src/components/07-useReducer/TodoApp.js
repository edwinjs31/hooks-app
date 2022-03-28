import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import '../07-useReducer/sytyle.css';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}];
export const TodoApp = () => {
    //hook de react
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    //custom hook propio para manejar formularios,enviamos la descripcion de la tarea
    const [{ description }, handleInputChange,reset] = useForm({
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
        //creamos la accion
        const action = {
            type: 'add',
            payload: newTodo
        }

        //se envia la accion 
        dispatch(action);

        //reseteamos o limpiamos los campos
        reset();
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
                                    <p className='text-center'>{i + 1}. {todo.desc}</p>
                                    <button className='btn btn-outline-danger'>Borrar</button>
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
