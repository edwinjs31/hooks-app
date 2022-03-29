import React, { useContext } from 'react'
import { UserContext } from './UserContext'

//COMPONENTES HERMANOS: AboutScreem, HomeScreen y LoginScreen
export const LoginScreen = () => {
  //UserContex:contiene la informacion para todo el arbol de componentes.
  const { setUser } = useContext(UserContext);

  const newUser = {
    id: 123,
    name: 'Edwin'
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button onClick={() => setUser(newUser)} className='btn btn-outline-success'>
        Login
      </button>
    </div>
  )
}
