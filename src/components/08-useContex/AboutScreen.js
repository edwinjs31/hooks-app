import React, { useContext } from 'react'
import { UserContext } from './UserContext'

//COMPONENTES HERMANOS: AboutScreem, HomeScreen y LoginScreen
export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => setUser({});
  
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button onClick={handleClick} className='btn btn-warning'>
        Loguot
      </button>
    </div>
  )
}
