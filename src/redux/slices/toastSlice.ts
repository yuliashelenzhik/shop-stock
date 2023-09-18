import { createSlice } from "@reduxjs/toolkit";

const initialState: ToastState = {
  type: "",
  message: "",
  isVisible: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});
export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
