

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser , checkUser} from "./authAPI";

const initialState ={
    loggedInUser : null,
    status : 'idle',
    error : null
}

export const createUserAsync = createAsyncThunk(
    '/register' ,     
    async ( userData) => {
        const response = await createUser(userData);
        return response.data;
    }

)
export const checkUserAsync = createAsyncThunk(
    'user/login' , 
    async ( loginInfo) => {
        const response = await checkUser(loginInfo);
        return response.data
    }

)


export const userSlice = createSlice({
    name :  'user',
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1
        },
    },
    extraReducers : (builder) => {
        builder
               .addCase(createUserAsync.pending , (state) => {
                   state.status = 'loading'
               })
               .addCase(createUserAsync.fulfilled , (state , action) => {
                   state.status = 'idle';
                   state.loggedInUser = action.payload;
               })
               .addCase(checkUserAsync.pending , (state) => {
                state.status = 'loading'
            })
            .addCase(checkUserAsync.fulfilled , (state , action) => {
                state.status = 'idle';
                state.loggedInUser = action.payload;
            })
            .addCase(checkUserAsync.rejected , (state , action) => {
                state.status = 'idle';
                state.loggedInUser = action.error;
            })
    }
})
export const selectLoggedInUser = (state) => state.user.loggedInUser
export const {increment} = userSlice.actions;

export default userSlice.reducer;