import { initState, reducer } from "./reducer";
import { createContext, useReducer } from "react";

export const authContext = createContext();
const AuthContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return ( 
        <authContext.Provider value ={{state, dispatch}}>
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContext;