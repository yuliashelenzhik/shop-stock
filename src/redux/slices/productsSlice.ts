import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
  products: Array<Product>;
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
