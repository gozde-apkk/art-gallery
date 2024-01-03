

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import  useReducer  from "./features/user/userSlice";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import { apiSlice } from "./features/auth/apiSlice";


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer, 
         auth : authReducer,
         allProducts : productsReducer
          
    },
    middleware : (getDefaultMiddleware)   => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true
})
