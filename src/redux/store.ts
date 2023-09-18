import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { api } from "../api/api";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import toastReducer from "./slices/toastSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
  auth: authReducer,
  modal: modalReducer,
  toast: toastReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
