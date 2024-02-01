import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // const [uid, email, displayName, photoURL] = action.payload;
      // state.uid = uid;
      // state.email = email;
      // state.displayName = displayName;
      // state.photoURL = photoURL;

      // console.log(state);
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
