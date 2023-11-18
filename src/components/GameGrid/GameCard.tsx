import { useNavigate } from "react-router-dom";
import { Game } from "../../entities/Game";
import getCroppedImage from "../../services/image-url";
import CriticScoreBadge from "./CriticScoreBadge";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center"
      onClick={() => navigate(`games/${game.slug}`)}
    >
      <div className="max-w-sm hover:scale-110 duration-500 object-cover transition cursor-pointer mx-2 sm:m-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-10 dark:border-gray-700">
        <img
          className="rounded-t-lg mx-auto max-h-48  "
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
