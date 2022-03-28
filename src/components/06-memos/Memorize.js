import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h2>Counter: <Small value={counter} /> </h2>
            <hr />
            <button onClick={increment} className='btn btn-secondary'>+1</button>
            <button onClick={()=>setShow(!show)} className='btn btn-primary mx-3'>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
