

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './auth/apiSlice';
import  userReducer  from '../../pages/auth/authSlices';


export const store =configureStore ({
    reducer : {
        auth : authReducer,
        user : userReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store;
