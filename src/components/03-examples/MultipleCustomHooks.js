import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    //Implementamos el hook del contador que tenemos de antes
    const { counter, increment } = useCounter(1);

    //useFetch retorna un Array con un objeto(ver en postman)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //data es un Array de objetos,el objeto en la primera posicion con atributos author,quote,etc. 
    //si existe la data extrae la posicion[0], si no los dos variables son undefined 
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {/*Ternario: Si está cargando mustramos el loadin si no el blocquote */}

            {
                loading
                    ?
                    (<div className='alert alert-info text-center'>Loading...</div>)
                    :
                    (<blockquote className='blockquote text-end'>
                        <p>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>)
            }
            {

                (!loading) && <button className='btn btn-primary' onClick={increment}>Next quote</button>
            }
        </div>
    )
}
