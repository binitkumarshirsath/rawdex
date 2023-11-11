import { useState } from "react";
import Main from "../components/Home/Main";
import SideBar from "../components/Home/SideBar";
import Navbar from "../components/Navbar";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const Home = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectingGenre = (genre: Genre) =>
    setGameQuery((prevData) => ({ ...prevData, genre }));
  const handleSelectingPlatform = (platform: Platform) =>
    setGameQuery((prevData) => ({ ...prevData, platform }));
  return (
    <>
      <div className="grid grid-col-8">
        <div className="col-span-8">
          <Navbar />
        </div>
        <div className=" col-span-1 hidden md:block md:mt-10 ml-2">
          <SideBar
            selectedGenre={gameQuery.genre}
            handleClick={handleSelectingGenre}
          />
        </div>
        <div className=" md:col-span-7  col-span-8">
          <Main
            handleSelectingPlatform={handleSelectingPlatform}
            gameQuery={gameQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
