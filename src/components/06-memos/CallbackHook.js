import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => setCounter(counter + 1);
    
    //parecido a useEffect pero cuando la dependencia es una funcion y retorna una funcion
    //setCounter usa otra funcion para cambiar el estado del counter para eliminar la dependencia/errores
    //c=counter, num=valor recibida desde el componente ShowIncremente
    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);


    return (
        <div>
            <h1>useCalback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
