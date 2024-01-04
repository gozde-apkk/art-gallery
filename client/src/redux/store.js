

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import { apiSlice } from "./features/auth/apiSlice";
import productReducer from './features/products/productsSlice'


export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer, 
         auth : authReducer,
         product :  productReducer,
          
    },
    middleware : (getDefaultMiddleware)   => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true
})
