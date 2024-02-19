import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    upcomingMovie: null,
    topRatedMovie: null,
    popularMovie: null,
    movieTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addMovieTrailer: (state, { payload }) => {
      state.movieTrailer = payload;
    },
    addUpcomingMovies: (state, { payload }) => {
      state.upcomingMovie = payload;
    },
    addPopularMovies: (state, { payload }) => {
      state.popularMovie = payload;
    },
    addTopRatedMovies: (state, { payload }) => {
      state.topRatedMovie = payload;
    },
  },
});

export const {
  addMovies,
  addMovieTrailer,
  addUpcomingMovies,
  addPopularMovies,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
