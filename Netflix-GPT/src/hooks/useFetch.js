import { URL, options } from "../utils/constant";
import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [detail, setDetail] = useState("");
  const Apifetch = async () => {
    const raw = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    const data = await raw.json();
    setDetail(data);
  };

  useEffect(() => {
    Apifetch();
  }, []);

  return detail;
};

export default useFetch;
