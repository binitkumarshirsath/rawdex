import React from "react";
import useGames from "../../hooks/useGames";
import { GameQuery } from "../../pages/Home";
import GameCard from "../GameGrid/GameCard";
import GameCardSkeleton from "../GameGrid/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const skeletonCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);

  return (
    <>
      {error && <p>{error.message}</p>}
      <div className="grid start-0  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {isLoading && skeletonCard.map((id) => <GameCardSkeleton key={id} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex  justify-center my-5">
        <button
          className="bg-gray-500 py-2 px-7 rounded-lg  font-Montserrat "
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading...." : "Load more"}
        </button>
      </div>
    </>
  );
};

export default GameGrid;

// {data?.results.length === 0 && (
//   <div className=" h-full w-full  flex mt-6 text-red-500 font-Montserrat ">
//     Selected Filter doesn't have any games present at the moment.
//   </div>
// )}
// {data?.results.map((game) => (
//   <GameCard key={game.id} game={game} />
// ))}
