import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Regina', age: 19, pfp: "/avatar.jpg" },
    { id: 2, name: 'Cady', age: 22, pfp: "/avatar.jpg" },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { id, name, age, pfp } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name || existingUser.name;
        existingUser.age = age || existingUser.age;
        existingUser.pfp = pfp || existingUser.pfp;
      }
    },
  },
});

export const { editUser } = userSlice.actions;
export default userSlice.reducer;
