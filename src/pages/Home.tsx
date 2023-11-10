import { useState } from "react";
import Main from "../components/Home/Main";
import SideBar from "../components/Home/SideBar";
import Navbar from "../components/Navbar";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const handleSelectingGenre = (genre: Genre) => setSelectedGenre(genre);
  const handleSelectingPlatform = (platform: Platform) =>
    setSelectedPlatform(platform);
  return (
    <>
      <div className="grid grid-col-8">
        <div className="col-span-8">
          <Navbar />
        </div>
        <div className=" col-span-1 hidden md:block md:mt-10 ml-2">
          <SideBar
            selectedGenre={selectedGenre}
            handleClick={handleSelectingGenre}
          />
        </div>
        <div className=" md:col-span-7  col-span-8">
          <Main
            handleSelectingPlatform={handleSelectingPlatform}
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
