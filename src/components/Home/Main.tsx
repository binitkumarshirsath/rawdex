import { Platform } from "../../hooks/usePlatForm";
import { GameQuery } from "../../pages/Home";
import GameHeading from "../GameGrid/GameHeading";
import PlatformSelector from "../GameGrid/PlatformSelector";
import SortOrderSelector from "../GameGrid/SortOrderSelector";
import GameGrid from "./GameGrid";

interface Props {
  handleSelectingPlatform: (platform: Platform) => void;
  handleSelectingSortOrder: (sortOrder: string) => void;
  gameQuery: GameQuery | null;
}

const Main = ({
  gameQuery,
  handleSelectingPlatform,
  handleSelectingSortOrder,
}: Props) => {
  return (
    <>
      <div className="md:ml-10">
        <div className=" flex gap-4">
          <PlatformSelector
            gameQuery={gameQuery}
            handleSelectingPlatform={handleSelectingPlatform}
          />
          <SortOrderSelector
            sortOrder={gameQuery?.sortOrder}
            handleSelectingSortOrder={handleSelectingSortOrder}
          />
        </div>
        <GameHeading gameQuery={gameQuery} />
        <GameGrid gameQuery={gameQuery} />
      </div>
    </>
  );
};

export default Main;
