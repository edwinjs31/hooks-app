
import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounteWithCustomHook = () => {
    //el hook retorna el estado y las dos funciones, si no le paso nada el valor inicial es 10
    const {state, increment, decrement, reset} = useCounter(40);
  console.log(state);
  return (
    <>
        <h1>Counter with Hook: {state}</h1>
        <hr/>
        {/*De esta forma implementamos las funciones enviadas del useCounter*/}
        {/* forma explicita: { ()=>increment() } */}
        {/* forma implicita:  { increment } */}
        <button onClick={ ()=> increment(2) } className='btn btn-success m-1'>+1</button>
        <button onClick={ reset } className='btn btn-danger m-1'>Reset</button>
        <button onClick={ ()=> decrement() } className='btn btn-success m-1'>-1</button>
    </>
  )
}
