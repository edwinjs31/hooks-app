//Los reducer son funciones puras, devulven un nuevo estado, son síncronas,
//pueden recibir dos argumentos:estado inicial y la accion. No deben tener efectos secundarios

//estado inicial
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

//reducer: devuleve el nuevo estado
const todoReducer = (state = initialState, action) => {
    //la primera vez la accion no tiene valor(?)
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

//imprime el estado inicial
let todos = todoReducer();

//nuevo estado
const newTodo = {
    id: 2,
    todo: 'Comprar galletas',
    done: false
}

//accion: contiene el tipo de accion y el nuevo valor del estado
//la accion es el encargado de modificar el estado
const agregarNuevaTareaReducer = {
    type: 'agregar',
    payload: newTodo
}

//llamamos el reduces con el estado inicial y la accion para añadir el nuevo estado
todos = todoReducer(todos, agregarNuevaTareaReducer);
console.log(todos);