import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//COMPONENTE DE LA BARRA DE NAVEGACION
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-link" >Home</NavLink>
                    <NavLink to="/about" className="nav-link" >About</NavLink>
                    <NavLink to="/login" className="nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
