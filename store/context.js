import { createContext } from "react";

export const StoreContext = createContext();

export default function StoreContextProvider(props){
    return(
        <StoreContext.Provider value={{
            appName:'Awesome App'
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}
