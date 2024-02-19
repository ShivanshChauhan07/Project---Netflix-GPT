import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { options, URL3 } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const popularMovieDetail = useSelector((store) => store?.movie?.popluarMovie);
  const dispatch = useDispatch();

  const apiFetch = async () => {
    const raw = await fetch(URL3, options);
    const data = await raw.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovieDetail && apiFetch();
  }, []);
};

export default usePopularMovies;
