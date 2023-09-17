import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialState: ModalState = {
  modal: "",
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: { payload: string }) => {
      state.modal = action.payload;
      state.isVisible = true;
    },
    closeModal: (state, action) => {
      state.modal = action.payload.modal;
      state.isVisible = false;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
