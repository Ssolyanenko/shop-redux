import { createSlice } from '@reduxjs/toolkit';

export const initialState = true;

// noinspection JSAnnotator
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn() {
      if(localStorage.getItem('auth')){
        return initialState;
      }

    },
    logOut  (state) {
      return state = false;

    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
