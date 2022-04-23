import { useState } from "react";

//CUSTOM HOOK QUE SE ENCARGA DE MANEAR EL CONTADOR
export const useCounter = (initialState = 10) => {

  const [state, setState] = useState(initialState);

  //el factor por defecto es 1, incrementa o decrementa en 1.
  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };

  const reset = () => {
    setState(initialState);
  };

  //retorna un objeto con la logica del hook, tambien pude retornar un Array
  return { counter: state, increment, decrement, reset };
};
