import { createContext, useState } from "react";

export const StoreContext = createContext();

export default function StoreContextProvider(props){
    let [appName,setAppName] = useState('Awesome app')

    function changeAppName(newName){
        setAppName(newName)
    }

    return(
        <StoreContext.Provider value={{
            appName:appName,
            changeAppName:(name)=>changeAppName(name)
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}
