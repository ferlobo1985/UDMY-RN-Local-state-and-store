import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// https://jsonplaceholder.typicode.com/posts

export const fetchPosts = createAsyncThunk(
    'users/fetchPosts',
    async(thunkAPI)=>{
        const request = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const response = request.data;
        return response;
    }
)


const usersSlice = createSlice({
    name:'users',
    initialState:{
        appName:'Awesome App',
        users:[],
        posts:[],
        loading:false
    },
    reducers:{
        changeAppName:(state,action)=>{
            state.appName = action.payload
        },
        setNewUser:(state,action)=>{
            state.users = [...state.users,action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
            state.loading = false;
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.loading = false;
            console.log(error)
        })
    }
});

export const { changeAppName, setNewUser } = usersSlice.actions;
export default usersSlice.reducer;