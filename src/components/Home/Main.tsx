import { Genre } from "../../hooks/useGenres";
import GameGrid from "./GameGrid";

interface Props {
  selectedGenre: Genre | null;
}

const Main = ({ selectedGenre }: Props) => {
  return <GameGrid selectedGenre={selectedGenre} />;
};

export default Main;
