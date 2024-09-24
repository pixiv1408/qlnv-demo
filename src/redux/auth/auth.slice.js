import { createSlice } from "@reduxjs/toolkit";
import { getTokenThunk, loginThunk } from "./auth.thunk";

const INITIAL_STATE = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder.addCase(getTokenThunk.fulfilled, (state, action) => {
      state.token = action.payload;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  }
});

export default authSlice.reducer;