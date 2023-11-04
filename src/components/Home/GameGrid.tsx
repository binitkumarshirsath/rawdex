import useGame from "../../hooks/useGame";
import GameCard from "../GameGrid/GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();
  return (
    <>
      {errors && <p>{errors}</p>}
      <div className="grid   grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
