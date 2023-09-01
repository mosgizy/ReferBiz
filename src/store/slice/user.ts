import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface userI{
  shareLink: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    shareLink: "",
  },
  reducers: {
    setLink: (state, action: PayloadAction<userI>) => { 
      state.shareLink = action.payload.shareLink;
    },
  },
});

export const { setLink } = userSlice.actions;

export default userSlice.reducer;