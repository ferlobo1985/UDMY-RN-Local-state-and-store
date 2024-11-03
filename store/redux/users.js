import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        appName:'Awesome App',
        users:[]
    }
});

export default usersSlice.reducer;