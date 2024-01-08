import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchCategories, fetchProductById, fetchProductsByFilters } from "./productApi";

const initialState = {
  products: null,
  status: "idle",
  selectedProduct: null,
  categories:[],
  totalItems:null
};
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const res = await fetchAllProducts();
    return res.data;
  }
);
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload;
        state.totalItems = action.payload;
      });
  },
});
export const selectProductById = (state) => state.product.selectedProduct;
export const selectAllProducts = (state) => state.product.products;
export default productsSlice.reducer;
