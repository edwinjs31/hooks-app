import { createContext } from "react";

//COMPONENTE PADRE PARA PROVEER INFORMACION A LOS HIJOS:AboutScreem, HomeScreen y LoginScreen
//este componente tendrá dentro de su tag el resto de componentes hijos
export const UserContext=createContext(null);