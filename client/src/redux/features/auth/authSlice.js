

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService';
import { toast } from 'react-toastify';

const initialState = {
    isLoggedIn : false,
    user : null,
    isError: false,
    isSuccess : false,
    isLoading : false,
    message : "",

}
//Register
export const registerUser = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.response && 
                             error.response.data && 
                             error.response.data.message) ||
                              error.message || error.toString();
        }
    }
)
//Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
      try {
          return await authService.login(user)
      } catch (error) {
          const message = (error.response && 
                          error.response.data && 
                          error.response.data.message) || 
                          error.message || error.toString();
      }
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    RESET_AUTH(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    }
  },
  extraReducers : (builder) => {
    builder 
         //Regiter User
       .addCase(registerUser.pending, (state) => {
         state.isLoading = true;
       })
       .addCase(registerUser.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isLoggedIn = true;
         state.user = action.payload;
         toast.success("Registration Successful");
         console.log(action.payload)
       })
       .addCase(registerUser.rejected, (state, action) => {
         state.isLoading = false;
         state.isError = true;
         state.message = action.payload;
         state.user = null;
         toast.error("Registration Failed!");
       })
       //Login User
       .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.success(action.payload);
      })
  }
});

export const {RESET_AUTH} = authSlice.actions

export default authSlice.reducer