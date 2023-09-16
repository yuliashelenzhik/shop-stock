import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { api } from "../api/api";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
