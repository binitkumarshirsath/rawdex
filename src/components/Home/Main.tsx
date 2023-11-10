import { Platform } from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "../GameGrid/PlatformSelector";
import GameGrid from "./GameGrid";

interface Props {
  selectedGenre: Genre | null;
  handleSelectingPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const Main = ({
  selectedGenre,
  handleSelectingPlatform,
  selectedPlatform,
}: Props) => {
  return (
    <>
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        handleSelectingPlatform={handleSelectingPlatform}
      />
      <GameGrid
        selectedGenre={selectedGenre}
        selectedPlatform={selectedPlatform}
      />
    </>
  );
};

export default Main;
