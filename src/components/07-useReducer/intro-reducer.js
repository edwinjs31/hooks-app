
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar galletas',
    done: false
}

const agregarNuevaTareaReducer = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarNuevaTareaReducer);
console.log(todos);