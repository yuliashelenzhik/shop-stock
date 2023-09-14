import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
