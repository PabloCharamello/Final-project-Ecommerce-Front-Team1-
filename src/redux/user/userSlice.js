import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      delete state.userId;
      delete state.token;
      state.userId = action.payload.id;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      delete state.userId;
      delete state.token;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
