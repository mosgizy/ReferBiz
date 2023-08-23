import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface userI{
  ownerName: string;
  shareLink: string;
  isLoggedIn: boolean;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ownerName: "",
    shareLink: "",
    isLoggedIn: false
  },
  reducers: {
    setLoginData: (state, action:PayloadAction<userI>) => {
      state.ownerName = action.payload.ownerName;
      state.shareLink = action.payload.shareLink;
      state.isLoggedIn = action.payload.isLoggedIn
    },

    setLink: (state, action: PayloadAction<userI>) => { 
      state.shareLink = action.payload.shareLink;
    },

    setLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }

    
  },
});

export const { setLoginData,setLogin,setLink } = userSlice.actions;

export default userSlice.reducer;