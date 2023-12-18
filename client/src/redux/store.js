

import { legacy_createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'
import {configureStore} from '@reduxjs/toolkit'
import categorySlice from './reducers/categorySlice';







export const store =configureStore ({
    reducer : {
        categories : categorySlice
    },
})

export default store;
