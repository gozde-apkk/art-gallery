import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import authService from './authService.js'




const initialState = {
  userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null,
  // user: null,
  // token: "",
  // isLoading: false,
  // isSuccess: false,
  // isError: false,
  // message: "",
}

export const register = createAsyncThunk("/register", async (user, thunkAPI) => {
  try {
    return await authService.registerUser(user) 
  } catch (error) {
    const message = (error.message &&
                 error.responser.data && 
                 error.responser.data.message) || 
                 error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reset: (state) => {
    //   state.isLoading = false
    //   state.isError = false
    //   state.isSuccess = false
    //   state.message = ""
    // }
    setCredentials : (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout : (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  },
  extraReducers: (builder) =>  {
  // builder
  //    .addCase(register.pending, (state) => {
  //      state.isLoading = true
  //    })
  //    .addCase(register.fulfilled, (state, action) => {
  //      state.isLoading = false
  //      state.isSuccess = true
  //      state.user = action.payload
  //    })
  //    .addCase(register.rejected, (state, action) => {
  //      state.isLoading = false
  //      state.isError = true
  //      state.message = action.payload
  //      state.user = null
  //    })
  }
})

export const {
  setCredentials, logout
} = authSlice.actions
export default authSlice.reducer