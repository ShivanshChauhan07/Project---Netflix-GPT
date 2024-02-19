import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  if (poster_path === null) return null;
  return (
    <div className="w-44 mx-1 pr-1 shrink-0 rounded-md transition-transform hover:scale-105 hover:-translate-y-6 hover:cursor-pointer">
      <img
        className="rounded-md"
        src={IMG_CDN + poster_path}
        alt="Movie poster"
      />
    </div>
  );
};

export default MovieCard;
