import React from "react";
import useFetch from "../hooks/useFetch";

const BackgroundVideo = ({ videoId }) => {
  const videoDetail = useFetch(videoId);
  if (!videoDetail) return;
  const trailerList = videoDetail.results;
  const trailer = trailerList.find(
    (item) => item.type === "Trailer" && item.name === "Official Trailer"
  );
  console.log(trailer);

  return (
    <div className="w-full ">
      <iframe
        className="w-full aspect-video pointer-events-none select-none"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1&loop=1&modestbranding=1&showinfo=0&autohide=1&rel=0&iv_load_policy=3`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <div className="absolute z-10 bg-gradient-to-r from-black  aspect-video w-full top-0 right-0"></div>
    </div>
  );
};

export default BackgroundVideo;
