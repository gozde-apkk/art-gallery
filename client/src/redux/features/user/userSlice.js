const { createSerializableStateInvariantMiddleware, createSlice } = require("@reduxjs/toolkit");




const userSlice = createSlice({
    name : "user",
    initialState : {
        isAuth : false,
        user : [],
    },
    reducers:{
        login : (state)=> {
            state.isAuth = true;
        },
        logout : (state) => {
            state.isAuth = false;
        },
        setUser : (state , action) => {
            state.user = action.payload
        }
    }
})

export const {login, logout, setUser} = userSlice.actions;
export default userSlice.reducer;