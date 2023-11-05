import useGames from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenres";
import GameCard from "../GameGrid/GameCard";
import GameCardSkeleton from "../GameGrid/GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const skeletonCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { data, error, loading } = useGames(selectedGenre);
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {loading && skeletonCard.map((id) => <GameCardSkeleton key={id} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
