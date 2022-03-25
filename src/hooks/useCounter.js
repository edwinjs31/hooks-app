import { useState } from "react";

export const useCounter = (initialState = 10) => {

  const [state, setState] = useState(initialState);

  //el factor por defecto es 1, incrementa o decrementa en 1.
  const increment = (factor=1) => {
    setState(state + factor);
  };

  const decrement = (factor=1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };

  //retorna un objeto con la logica del hook, tambien pude retornar un Array
  return {state, increment, decrement, reset};
};
