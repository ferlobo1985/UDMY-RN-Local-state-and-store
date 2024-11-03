import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        appName:'Awesome App',
        users:[]
    },
    reducers:{
        changeAppName:(state,action)=>{
            state.appName = action.payload
        },
        setNewUser:(state,action)=>{
            state.users = [...state.users,action.payload]
        }
    }
});

export const { changeAppName, setNewUser } = usersSlice.actions;
export default usersSlice.reducer;