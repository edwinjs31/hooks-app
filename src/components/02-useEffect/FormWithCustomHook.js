import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {

    const [valueForm, handleInputChange, reset] = useForm({
        name: "",
        email: "",
        password: ""
    });//Se puede pasar como segundo argumento para las validaciones

    const { name, email, password } = valueForm;

    //Se ejecuta cuando cambia el email o cualquier elemento individualmente
    useEffect(() => {
        //console.log("Cambio en el Email");
    }, [email]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(valueForm);
        reset();
    }

    return (
        <form onSubmit={handleSubmit} className='w-50'>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group mt-2">
                <label>Nombre</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group mt-2">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mt-2">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary mt-4" type="submit">Guardar</button>
        </form>
    );
};
