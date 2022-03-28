import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import '../07-useReducer/sytyle.css';

//COMPONENTE PADRE PARA APLICAR USEREDUCE CON: initialState e init(obtiene los mismos resultado)

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

   

    //GUARDANDO DATOS EN EL LOCALSTORAGE
    //==============================================================================
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);//guardará solo cuando los 'todos' cambien,incluyendo el estado inicial
    //=================================================================================


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

    //evento para agregar nueva tarea
    const hadleAddTodo = (newTodo) => {
        //creamos la accion y enviamos
        dispatch({
            type: 'add',
            payload: newTodo
        });
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
                    <TodoList
                        todos={todos}
                        hangleToggle={hangleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                {/* Columna de opciones */}
                <div className='col-sm-5'>
                    <TodoAdd hadleAddTodo={hadleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
