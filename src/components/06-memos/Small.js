import React, { memo } from 'react'
//memoriza todo el contenido o valor del Componente, y solo se ejecutará cuando cmbie el valor de la props
export const Small = memo(({ value }) => {
    console.log('Ejecucion del componente Small cuando cambia el valor del prop');
    return (
        <small> {value} </small>
    )
})
