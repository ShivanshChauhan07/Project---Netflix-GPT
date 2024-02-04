import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
