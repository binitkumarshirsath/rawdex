import { Game } from "../../hooks/useGames";
import getCroppedImage from "../../services/image-url";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-sm mx-2 sm:m-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-10 dark:border-gray-700">
        <img
          className="rounded-t-lg overflow-hidden object-contain "
          src={getCroppedImage(game.background_image)}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 font-serif dark:text-white">
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
    </div>
  );
};

export default GameCard;
