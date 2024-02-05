import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <>
      <div className="browser bg-black h-fit">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
