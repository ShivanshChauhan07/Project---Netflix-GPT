import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, flag }) => {
  console.log(flag);
  return (
    movies && (
      <>
        <div
          className={
            flag !== undefined ? "pl-16" : "relative -top-52 z-40 pl-16 "
          }
        >
          <h1 className="text-xl font-medium pl-8">{title}</h1>
          <div className="list w-full p-8 flex overflow-x-scroll ">
            {movies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default MovieList;
