import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    //useMemo memoriza el valor del counter, si cambia su valor ejecuta la funcion 'procesoPesado'
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button onClick={increment} className='btn btn-secondary'>+1</button>
            <button onClick={() => setShow(!show)} className='btn btn-primary mx-3'>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
