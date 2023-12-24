

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './auth/apiSlice';


export const store =configureStore ({
    reducer : {
        auth : authReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store;
