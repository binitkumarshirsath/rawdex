import GameHeading from "../GameGrid/GameHeading";
import PlatformSelector from "../GameGrid/PlatformSelector";
import SortOrderSelector from "../GameGrid/SortOrderSelector";
import GameGrid from "./GameGrid";

const Main = () => {
  return (
    <>
      <div className="md:ml-10">
        <div className=" flex gap-4">
          <PlatformSelector />
          <SortOrderSelector />
        </div>
        <GameHeading />
        <GameGrid />
      </div>
    </>
  );
};

export default Main;
