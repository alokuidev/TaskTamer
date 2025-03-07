import { useState } from "react"
import UseContext from "./UseContext";


const ContextProvider = ({children}) =>{

    const [state,setState] = useState();

    return(
        <UseContext.Provider value={{state,setState}}>
            {children}
        </UseContext.Provider>
    )
}

export default ContextProvider;