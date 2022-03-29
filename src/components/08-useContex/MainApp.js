//APLICACION PRINCIPAL
import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

//COMPONENTE PRINCIPAL QUE ENGLOBA TODOS LOS DEMAS COMPONENTES
export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        //todos los componentes que estén dentro de este tag podrán acceder a la informacion
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
