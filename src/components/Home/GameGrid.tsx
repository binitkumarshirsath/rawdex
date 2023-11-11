import useGames from "../../hooks/useGames";
import { GameQuery } from "../../pages/Home";
import GameCard from "../GameGrid/GameCard";
import GameCardSkeleton from "../GameGrid/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const skeletonCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { data, error, loading } = useGames(gameQuery);

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {loading && skeletonCard.map((id) => <GameCardSkeleton key={id} />)}
        {data.length === 0 && (
          <div className=" h-full w-full  flex mt-6 text-red-500 font-Montserrat ">
            Selected Filter doesn't have any games present at the moment.
          </div>
        )}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
