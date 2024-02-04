import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <>
      <div className="browser h-fit">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
