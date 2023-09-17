import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalState = {
  modal: "",
  data: {
    id: undefined,
  },
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modal = action.payload.modal;
      state.data = action.payload.data;
      state.isVisible = action.payload.isVisible;
    },
  },
});
export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
