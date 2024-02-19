import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { options, URL4 } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const usetopRatedMovies = () => {
  const topRatedMovieDetail = useSelector(
    (store) => store?.movie?.topRatedMovie
  );
  const dispatch = useDispatch();

  const apiFetch = async () => {
    const raw = await fetch(URL4, options);
    const data = await raw.json();

    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovieDetail && apiFetch();
  }, []);
};

export default usetopRatedMovies;
