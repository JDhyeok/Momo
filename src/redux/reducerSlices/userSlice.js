import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  signedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: state => {
      state.signedIn = true;
    },
    logout: state => {
      state.signedIn = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
