import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movie?.nowPlayingMovie
  );
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovie);
  const popularMovies = useSelector((store) => store?.movie?.popularMovie);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovie);
  return (
    <div className=" text-white">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Horror's"} movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
