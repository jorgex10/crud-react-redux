import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddUser: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    hideAddUserCard: (state) => {
      state.showAddUser = false;
    },

    showAddUserCard: (state) => {
      state.showAddUser = true;
    },
  },
});

export const { hideAddUserCard, showAddUserCard } = uiSlice.actions;

export default uiSlice.reducer;
