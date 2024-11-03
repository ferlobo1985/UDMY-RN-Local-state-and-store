import { createContext, useState } from "react";

export const StoreContext = createContext();

export default function StoreContextProvider(props){
    let [appName,setAppName] = useState('Awesome app');
    let [users,setUsers] = useState([]);

    function changeAppName(newName){
        setAppName(newName)
    }

    function setNewUser(user){
        setUsers(prev=>[...prev,user])
    }

    return(
        <StoreContext.Provider value={{
            appName:appName,
            users:users,
            changeAppName:(name)=>changeAppName(name),
            setNewUser:(user)=>setNewUser(user)
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}
