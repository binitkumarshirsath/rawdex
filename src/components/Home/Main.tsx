import { Platform } from "../../hooks/useGames";
import { GameQuery } from "../../pages/Home";
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
      <PlatformSelector
        gameQuery={gameQuery}
        handleSelectingPlatform={handleSelectingPlatform}
      />
      <SortOrderSelector
        sortOrder={gameQuery?.sortOrder}
        handleSelectingSortOrder={handleSelectingSortOrder}
      />
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default Main;
