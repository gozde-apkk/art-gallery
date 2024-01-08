import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart(state, action) {
      state.carts = [...state.carts, action.payload];
    },
  },
});

export const { addcart } = cartSlice.actions;

export const selectItems = (state) => state.cart.carts;

export default cartSlice.reducer;
