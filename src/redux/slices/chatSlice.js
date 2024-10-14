import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { senderId, message } = action.payload;
      state.chats.push({
        senderId,
        message,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
