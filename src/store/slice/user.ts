import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface userI{
  ownerName: string;
  ownerEmail: string;
  isLoggedIn: boolean;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ownerName: "",
    ownerEmail: "",
    isLoggedIn: false
  },
  reducers: {
    setLoginData: (state, action:PayloadAction<userI>) => {
      state.ownerName = action.payload.ownerName;
      state.ownerEmail = action.payload.ownerEmail;
      state.isLoggedIn = action.payload.isLoggedIn
    },

    setLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }

    
  },
});

export const { setLoginData,setLogin } = userSlice.actions;

export default userSlice.reducer;