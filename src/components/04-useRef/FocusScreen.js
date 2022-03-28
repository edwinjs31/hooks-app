import React, { useRef } from 'react'

export const FocusScreen = () => {

    //FORMAS DE MANEJAR EL FOCUS DEL INPUT

    //2.usando hooks 
    const inputRef=useRef();

    const hadleClic=()=>{
        
        //1.manera tradicional,asigna el focus al input
        //document.querySelector('input').focus();

        //1.manera tradicional,ademas de asignar el foco,selecciona el contenido del input.
        //document.querySelector('input').select();

        //2.usando hooks
        inputRef.current.focus();

        //2.usando hooks
        //inputRef.current.select();
    }

    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input ref={ inputRef } type="text" placeholder='Su nombre' className='form-control' />
            <button className='btn btn-outline-info mt-3' onClick={ hadleClic }>Focus</button>

        </div>
    )
}
