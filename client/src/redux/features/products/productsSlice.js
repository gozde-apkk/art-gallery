import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { fetchAllProducts } from './productApi'



const initialState = {
    products : [],
    status : "idle"
}


export const fetchAllProductAsync = createAsyncThunk(
    'product/fetchAllProduct',
  async() => {
   const res =  await fetchAllProducts("http://localhost:5000/api/products")
   return res.data
 })
const productsSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProductAsync.pending , (state) => {
            state.status = 'loading'
        })
        .addCase(fetchAllProductAsync.fulfilled , (state, action) => {
            state.status = 'success';
            state.products = action.payload;    
        })
        
    }
})

export const selectAllProducts = (state) => state.product.products
export default productsSlice.reducer