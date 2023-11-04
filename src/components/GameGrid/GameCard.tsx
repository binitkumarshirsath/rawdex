import { Game } from "../../hooks/useGame";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="max-w-sm mx-auto my-6 sm:m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg" src={game.background_image} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {game.name}
        </h5>

        <div className="flex gap-3 justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScoreBadge score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
