import { createSlice } from '@reduxjs/toolkit';

export let initialState = false;

// noinspection JSAnnotator
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn() {
      if(localStorage.getItem('auth')){
        return initialState = true
      }
      return initialState = true

    },
    logOut  (state) {
      return state = false;

    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
