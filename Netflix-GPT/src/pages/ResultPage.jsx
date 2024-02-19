import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const searchResult = useSelector((store) => store?.gpt?.movieResult);
  const searchName = useSelector((store) => store?.gpt?.movieName);
  const flag = true;

  return searchResult === null ? (
    <div className="brightness-75 h-[2000px] absolute  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam
      incidunt facere culpa dolore cupiditate consequuntur! Fuga, explicabo
      recusandae nihil, quibusdam dolore doloremque voluptatem est atque, dicta
      natus doloribus magni!
    </div>
  ) : (
    <div className="brightness-75 absolute  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')]">
      <div className="mt-28 ">
        <div className="py-4 text-white brightness-115">
          {searchName.map((movieName, index) => {
            return (
              <MovieList
                key={movieName}
                title={movieName}
                movies={searchResult[index]}
                flag={flag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
