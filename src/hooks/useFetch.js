import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        //Para nueva peticion al clicar 'Next quote' cambiar el estado,para que se muestre el loading.
        setState({ data: null , loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({ loading: false, error: null, data });
            });

    }, [url])

    //retornamos un Array con un objeto(ver en postman)
    return state;
}
