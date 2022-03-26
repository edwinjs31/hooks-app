import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effect.css";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  //se ejecuta cuando cambia algo en el estado(se ejecuta solo la primera vez)
  useEffect(() => {
    //console.log("Estado inicial");
  },[]);

  //se ejecuta cuando cambia algo en el formulario
  useEffect(() => {
    //console.log("Cambio en el Form");
  },[formState]);

  //Se ejecuta cuando cambia el email o cualquier elemento individualmente
  useEffect(() => {
    //console.log("Cambio en el Email");
  },[email]);

  //evento onChange, para cambiar el valor de los elementos
 const handleInputChange = ({ target }) => {
    setFormState({...formState, [target.name]: target.value });
 }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
            />
      </div>

      <div className="form-group">
        <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
            />
      </div>
      {/* Si el nombre es 123 se muestra el mensaje */}
      { (name==='123') && <Message />}
    </>
  );
};
