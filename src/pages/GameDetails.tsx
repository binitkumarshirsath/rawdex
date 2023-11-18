import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Spinner from "../components/Sidebar/Spinner";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import CriticScoreBadge from "../components/GameGrid/CriticScoreBadge";

const GameDetails = () => {
  const { slug } = useParams();

  // by appending the slug with ! , we tell ts , that slug will never be undefined
  const { data: game, isLoading, isError, error } = useGame(slug!);
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError || !game) {
    throw error;
  }

  return (
    <div className="p-5">
      <h1>{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      {/* platforms */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <GameAttributes title="Platforms">
          {game.parent_platforms.map(({ platform }, index) => (
            <div key={index}>{platform.name}</div>
          ))}
        </GameAttributes>
        {/* metacritic */}
        <GameAttributes title="MetaScore">
          <CriticScoreBadge score={game.metacritic} />
        </GameAttributes>

        {/* genres */}
        <GameAttributes title="Genres">
          {game.genres?.map((genre) => (
            <div key={genre.id}>{genre.name}</div>
          ))}
        </GameAttributes>
        {/* publishers */}
        <GameAttributes title="Publishers">
          {game.publishers?.map((publisher) => (
            <div key={publisher.id}>{publisher.name}</div>
          ))}
        </GameAttributes>
      </div>
    </div>
  );
};

export default GameDetails;
