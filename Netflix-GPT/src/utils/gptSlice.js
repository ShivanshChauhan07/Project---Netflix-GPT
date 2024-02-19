import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieResult: null,
    movieName: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
