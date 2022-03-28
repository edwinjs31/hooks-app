import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

    //Implementamos el hook del contador que tenemos de antes
    const { counter, increment } = useCounter(1);

    //useFetch retorna un Array con un objeto(ver en postman)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //data es un Array de objetos,el objeto en la primera posicion con atributos author,quote,etc. 
    //si existe la data extrae la posicion[0], si no los dos variables son undefined 
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    //para controlar las dimensiones del contenido, se ejecuta una vez se renderiza todo
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);//si la frase(quote) cambia tambian cambia el tamaño de su caja
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            {/*Ternario: Si está cargando mustramos el loadin si no el blocquote */}

            <blockquote className='blockquote text-end'>
                <p ref={pTag}>{quote}</p>
            </blockquote>
            {/* Mostramos las dimenciones de la caja de quote, null:para no renderizar */}
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
            <button className='btn btn-primary' onClick={increment}>Next quote</button>

        </div>
    )
}
