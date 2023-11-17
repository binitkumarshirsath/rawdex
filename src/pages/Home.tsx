import Main from "../components/Home/Main";
import SideBar from "../components/Home/SideBar";
import Navbar from "../components/Navbar";
import useGameQuery from "../store/GameQuery";

const Home = () => {
  const { gameQuery, setPlatformQuery, setSortOrderQuery } = useGameQuery();

  return (
    <>
      <div className="grid grid-col-8">
        <div className="col-span-8">
          <Navbar />
        </div>
        <div className=" col-span-1 hidden md:block md:mt-10 ml-2">
          <div className="font-Montserrat my-4 text-4xl">Genres</div>
          <SideBar />
        </div>
        <div className=" md:col-span-7  col-span-8">
          <Main
            gameQuery={gameQuery}
            handleSelectingPlatform={setPlatformQuery}
            handleSelectingSortOrder={setSortOrderQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
