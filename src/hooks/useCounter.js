import { useState } from "react";

//CUSTOM HOOK QUE SE ENCARGA DE MANEAR EL CONTADOR
export const useCounter = (initialState = 10) => {

  const [counter, setCounter] = useState(initialState);

  //el factor por defecto es 1, incrementa o decrementa en 1.
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  //retorna un objeto con la logica del hook, tambien pude retornar un Array
  return { counter, increment, decrement, reset };
};
