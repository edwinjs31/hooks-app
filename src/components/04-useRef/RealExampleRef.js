import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            { show && <MultipleCustomHooks />}
            <button onClick={()=>setShow(!show)} className='btn btn-outline-success mt-3'>Show/Hide</button>
        </div>
    )
}
