
//Éste proceso será implementado en el componente 'MemoHook'
export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ahí vamos....');
    }
    return `${iteraciones} iteraciones realizadas`;
}