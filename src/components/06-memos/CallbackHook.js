import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => setCounter(counter + 1);
    
    //parecido a useEffect pero con funciones
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
