import useGames, { Platform } from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenres";
import GameCard from "../GameGrid/GameCard";
import GameCardSkeleton from "../GameGrid/GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const skeletonCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { data, error, loading } = useGames(selectedGenre, selectedPlatform);
  if (data.length === 0) {
    return (
      <div className="flex flex-1 font-Montserrat text-red-500 ml-10  h-60 items-center">
        Selected filters doesnt have any Games present at the moment.
      </div>
    );
  }
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
