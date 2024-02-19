import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { options, URL2 } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const upcomingMovieDetail = useSelector(
    (store) => store?.movie?.upcomingMovie
  );
  const dispatch = useDispatch();

  const apiFetch = async () => {
    const raw = await fetch(URL2, options);
    const data = await raw.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovieDetail && apiFetch();
  }, []);
};

export default useUpcomingMovies;
