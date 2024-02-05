import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    movieTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addMovieTrailer: (state, { payload }) => {
      state.movieTrailer = payload;
    },
  },
});

export const { addMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;
