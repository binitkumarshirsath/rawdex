import { Platform } from "../../hooks/useGames";
import { GameQuery } from "../../pages/Home";
import PlatformSelector from "../GameGrid/PlatformSelector";
import GameGrid from "./GameGrid";

interface Props {
  handleSelectingPlatform: (platform: Platform) => void;
  gameQuery: GameQuery | null;
}

const Main = ({ gameQuery, handleSelectingPlatform }: Props) => {
  return (
    <>
      <PlatformSelector
        gameQuery={gameQuery}
        handleSelectingPlatform={handleSelectingPlatform}
      />
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default Main;
