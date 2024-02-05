import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { options, URL } from "../utils/constant";
import { addMovies } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
  const playingMovieDetail = useSelector(
    (store) => store?.movie?.nowPlayingMovie
  );
  const dispatch = useDispatch();

  const apiFetch = async () => {
    const raw = await fetch(URL, options);
    const data = await raw.json();
    dispatch(addMovies(data.results));
  };

  useEffect(() => {
    !playingMovieDetail && apiFetch();
  }, []);
};

export default useNowPlayingMovie;
