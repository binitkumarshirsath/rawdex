import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../../pages/Home";
import useGames from "../../hooks/useGames";
import GameCard from "../GameGrid/GameCard";
import GameCardSkeleton from "../GameGrid/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const skeletonCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {
    data,
    error,
    isLoading,
    fetchNextPage,

    hasNextPage,
  } = useGames(gameQuery);

  const gamesFetchedSoFar =
    data?.pages.reduce((total, page) => (total += page.results.length), 0) || 0;

  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={gamesFetchedSoFar}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={
          <div className="w-full mx-auto flex justify-center ">
            <span className="loading   loading-spinner loading-lg"></span>
          </div>
        }
      >
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
