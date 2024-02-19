import React, { useRef } from "react";
import openai from "../utils/openai";
import { Link } from "react-router-dom";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&language=en-US&page=1",
      options
    );

    const json = await data.json();

    return json.results;
  };

  return (
    <>
      <div className="w-screen h-[2700px] absolute z-50 bg-black bg-opacity-80"></div>
      <div className="text-white fixed z-50 w-1/2 h-12 top-0 left-0 right-0 bottom-0 m-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-4/5 h-12 text-lg rounded-l-md px-2 text-black"
            type="text"
            placeholder="What movie do you want to see today ?"
            ref={searchText}
          />
          <Link to={"/result"}>
            <button
              className="bg-red-500 p-2 rounded-r-md w-1/5 h-12 font-medium text-lg hover:bg-red-600"
              onClick={async () => {
                document.body.style.overflowY = "scroll";
                const query =
                  "Act as a Movie Recommendation system and suggest some movies for the query" +
                  searchText.current.value +
                  ". Only give me the name of five movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Wanted, Bodygaurd,kabir singh";

                const result = await openai.chat.completions.create({
                  messages: [{ role: "user", content: query }],
                  model: "gpt-3.5-turbo",
                });
                const gptMovieList =
                  result.choices?.[0]?.message?.content.split(",");
                const promiseArray = gptMovieList.map((movie) =>
                  searchMovieTMDB(movie)
                );

                const tmdbResult = await Promise.all(promiseArray);
                console.log(tmdbResult);
                dispatch(
                  addGptMovieResult({
                    movieName: gptMovieList,
                    movieResult: tmdbResult,
                  })
                );
              }}
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
