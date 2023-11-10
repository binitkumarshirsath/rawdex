import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "../GameGrid/PlatformSelector";
import GameGrid from "./GameGrid";

interface Props {
  selectedGenre: Genre | null;
}

const Main = ({ selectedGenre }: Props) => {
  return (
    <>
      <PlatformSelector />
      <GameGrid selectedGenre={selectedGenre} />
    </>
  );
};

export default Main;
