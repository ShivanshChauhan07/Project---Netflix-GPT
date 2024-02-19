import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usetopRatedMovies from "../hooks/useTopRatedMovies";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const Browse = () => {
  const [searchModal, setSearchModal] = useState(false);

  useNowPlayingMovie();
  useUpcomingMovies();
  usePopularMovies();
  usetopRatedMovies();

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.shiftKey && event.key.toLowerCase() === "k") {
        setSearchModal(true);
        document.body.style.overflow = "hidden";
      } else if (event.key === "Escape") {
        setSearchModal(false);
        document.body.style.overflowY = "scroll";
      }
    });
    return () => {
      removeEventListener("keydown", (event) => {
        if (event.shiftKey && event.key.toLowerCase() === "k")
          setSearchModal(true);
        else if (event.key === "Escape") {
          searchModal(false);
          document.body.style.overflowY = "scroll";
        }
      });
    };
  }, []);

  return (
    <>
      <div className="browser  bg-black ">
        {searchModal && <SearchBar />}
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;
