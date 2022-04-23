//COMPONENTE QUE MANEJA LAS RUTAS, UNA APP PUEDE TENER MAS DE UN ROUTER
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//COMPONENTE PARA DEFINIR/CONFIGURAR LAS RUTAS(PATH)
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { NotFound } from './NotFound';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/about" element={<AboutScreen />} />
                        <Route exact path="/login" element={<LoginScreen />} />
                        {/* Cuando se envia un path que no existe  */}
                        <Route path="*" element={<NotFound />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
