import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


export const counterSlice = createSlice({
  name: "auth",
  initialState: JSON.parse(sessionStorage.getItem("user")) ?? initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export const getLoginState = (state) => state.auth.user;

export default counterSlice.reducer;
