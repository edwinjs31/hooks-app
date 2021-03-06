import React from 'react'

export const ShowIncrement =React.memo (({ increment }) => {

    console.log('Soy showIncrement, me volví a ejecutar');
    //se incrementará de 5 en 5 y este componente(boton) se implementará en CallbackHooks
    return (
        <button onClick={() => increment(5)} className='btn btn-outline-success'>Incrementar</button>
    )
})
