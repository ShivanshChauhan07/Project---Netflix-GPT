import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovie);
  if (!movies) return;
  const movie = movies[0];
  const { id, title, overview } = movie;

  return (
    <div className="h-fit">
      <BackgroundVideo videoId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
