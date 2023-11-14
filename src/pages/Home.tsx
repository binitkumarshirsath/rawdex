import { useState } from "react";
import Main from "../components/Home/Main";
import SideBar from "../components/Home/SideBar";
import Navbar from "../components/Navbar";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  search: string | null;
}

const Home = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectingGenre = (genreId: number | undefined) =>
    setGameQuery((prevData) => ({ ...prevData, genreId }));
  const handleSelectingPlatform = (platformId: number | undefined) =>
    setGameQuery((prevData) => ({ ...prevData, platformId }));
  const handleSelectingSortOrder = (sortOrder: string) =>
    setGameQuery((prevData) => ({ ...prevData, sortOrder }));
  const handleSearchQuery = (search: string) =>
    setGameQuery((prevData) => ({ ...prevData, search }));
  return (
    <>
      <div className="grid grid-col-8">
        <div className="col-span-8">
          <Navbar handleSearchQuery={handleSearchQuery} />
        </div>
        <div className=" col-span-1 hidden md:block md:mt-10 ml-2">
          <div className="font-Montserrat my-4 text-4xl">Genres</div>
          <SideBar
            selectedGenre={gameQuery.genreId}
            handleClick={handleSelectingGenre}
          />
        </div>
        <div className=" md:col-span-7  col-span-8">
          <Main
            gameQuery={gameQuery}
            handleSelectingPlatform={handleSelectingPlatform}
            handleSelectingSortOrder={handleSelectingSortOrder}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
