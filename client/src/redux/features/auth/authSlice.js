import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




const initialState = {
   userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
};


// export const createUserAsync = createAsyncThunk(
//   'auth/createUser',
//   async (userData) => {
//     const response = await createUser(userData);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );



// export const checkUserAsync = createAsyncThunk(
//   'auth/checkUser',
//   async (loginInfo) => {
//     const response = await checkUser(loginInfo);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     setCredentials :(state, action) => {
      state.userInfo = action.payload
      localStorage.setItem("userInfo", JSON.stringify(action.payload))
     },
         logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo ')
     }
  },
 
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(createUserAsync.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(createUserAsync.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.user = action.payload;
  //     })
  //     .addCase(checkUserAsync.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(checkUserAsync.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.user = action.payload;
  //     })
  //     .addCase(checkUserAsync.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = false;
  //       state.isError = true;
  //       state.user = null;
  //     });
  // },
});

export const {setCredentials , logout} = authSlice.actions

export default authSlice.reducer;
