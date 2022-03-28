import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    //cuando ya no está montado o renderizado la refencia es false. y ya no se llama a setState
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    //cuando ya no está montado o renderizado la refencia es false. y ya no se llama a setState
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        //Para nueva peticion al clicar 'Next quote' cambiar el estado,para que se muestre el loading.
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //si todabia está montado/renderizado se llama a setState, si no, no
                if (isMounted.current) {
                    setState({ loading: false, error: null, data });
                }

            });

    }, [url])

    //retornamos un Array con un objeto(ver en postman)
    return state;
}
