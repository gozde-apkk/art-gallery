

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import { apiSlice } from "./features/auth/apiSlice";
import productReducer from './features/products/productsSlice'
import cartReducer from './features/cart/cartSlice'
import shopReducer from './features/cart/shopReducer';



export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer, 
         auth : authReducer,
         product :  productReducer,
         cart : cartReducer
    },
    middleware : (getDefaultMiddleware)   => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true
})
