import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "addToWish",
  initialState: {
    items: 0,
  },
  reducers: {
    addCartItems: (state) => {
      state.items += 1;
    },
  },
});

export const { addCartItems } = cartSlice.actions;

export default cartSlice.reducer;
