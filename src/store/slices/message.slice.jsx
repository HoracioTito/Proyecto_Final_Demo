import { createSlice } from '@reduxjs/toolkit';


export const messageSlice = createSlice({
    name: 'messages',
    initialState: {},
    reducers: {
        setMessages : (state, action) => {
            const messages = action.payload;
            return messages;
          }
    }
})

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
