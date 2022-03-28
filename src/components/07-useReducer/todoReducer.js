//
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add'://retorna un nuevo Array agregando el nuevo elemento(action.payload)
            return [...state, action.payload];

        case 'delete'://retorna un nuevo Array con los elementos que cumplan con la condicion(action.payload será el que se elimine)
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle'://retorna un nuevo Arra con los elementos modificados(cambia el estado del 'done')
            return state.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);

        case 'toggle-old'://VERSION LARGA DEL ANTEIOR CASO
            return state.map(todo => {
                if (todo.id === action.payload) {//si es el id seleccionado
                    return { ...todo, done: !todo.done }//devuelve el todo con el 'done' distinto(si era true,devolverá false y biceversa)
                } else {
                    return todo;
                }
            })

        default:
            return state;
    }
}