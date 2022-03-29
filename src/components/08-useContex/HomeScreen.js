import React, { useContext } from 'react';
import { UserContext } from './UserContext';

//COMPONENTES HERMANOS: AboutScreem, HomeScreen y LoginScreen
export const HomeScreen = () => {

  //recibimos la iformacion del componente padre(UserContext)
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}
