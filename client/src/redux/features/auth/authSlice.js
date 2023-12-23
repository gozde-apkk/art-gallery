



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    isLoggedIn : false,
    user : null,
    isError : false,
    isSuccess : false,
    isLoggin : false,
    message : "",
}
//Registr User
export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
         return await authService.register(userData)
        }catch(err) {
             const errMsg = (err.message &&
                err.response.data &&
                err.response.data.message) ||
                err.message ||
                err.toString()
            return thunkAPI.rejectWithValue(errMsg)
        }
    }
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REST_AUTH(state) {
        state.isError = false
        state.isSuccess = false
        state.isLoggedIn = false
        state.message = ""
        state.user = null
  },
  extraReducers : (builder) => {
    builder.addCase(register.pending, (state) => {
        state.isLoggin = true
    })
    .addCase(register.fulfilled, (state , action) => {
        state.isLoggin = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("Successfully registered")
    })
    .addCase(register.rejected, (state , action) => {
        state.isLoggin = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.success("Successfully registered")
    })
  }
}})
export const {} = authSlice.actions

export default authSlice.reducer