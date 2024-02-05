import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieSlice";

const useFetchTrailer = (id) => {
  const detail = useSelector((store) => store?.movie?.movieTrailer);
  const dispatch = useDispatch();

  const Apifetch = async () => {
    const raw = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    const data = await raw.json();
    dispatch(addMovieTrailer(data));
  };

  useEffect(() => {
    !detail && Apifetch();
  }, []);
};

export default useFetchTrailer;
