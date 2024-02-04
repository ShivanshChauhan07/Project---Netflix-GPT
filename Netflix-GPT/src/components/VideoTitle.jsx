import React from "react";
import "../index.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 bottom-48 left-44 w-fit text-white">
      <div className="">
        <details open>
          <summary className="list-none cursor-pointer">
            <h1 className="text-6xl font-semibold font-mono">{title}</h1>
          </summary>
          <p id="hero" className="text-wrap w-80 hidden">
            {overview}
          </p>
        </details>
      </div>
      <div>
        <button className="p-2 w-28 m-2 text-base rounded-sm bg-white text-black hover:bg-opacity-80">
          <i class="fa-solid fa-play"></i> Play
        </button>
        <button className="p-2 w-28 m-2 text-base rounded-sm bg-gray-500 text-white bg-opacity-50">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
