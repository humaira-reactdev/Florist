import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage if it exists, otherwise set to null
const initialState = {
  value: JSON.parse(localStorage.getItem('productData')) || [],
};

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    productData: (state, action) => {
      state.value = action.payload;
      // Save the updated state to localStorage
      localStorage.setItem('productData', JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { productData } = ProductSlice.actions;

export default ProductSlice.reducer;
