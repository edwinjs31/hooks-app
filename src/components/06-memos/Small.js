import React, { memo } from 'react'
//memo sirve para memorizar el valor de props y si no cambia no ejecuta el resto de codigo
export const Small = memo(({ value }) => {
    console.log('Me ejecuto cuando cambie el valor del prop');
    return (
        <small> {value} </small>
    )
})
