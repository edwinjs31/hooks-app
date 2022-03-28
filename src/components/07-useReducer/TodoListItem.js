import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, hangleToggle }) => {
    return (

        <li key={todo.id} className="list-group-item">
            {/* Si 'done' es true retorna el nombre de una clase, si no no hace nada */}
            <p onClick={() => hangleToggle(todo.id)} className={`${todo.done && 'complete'}`}>
                {index + 1}. {todo.desc}
            </p>
            <button onClick={() => handleDelete(todo.id)} className='btn btn-outline-danger'>Borrar</button>
        </li>
    )
}
