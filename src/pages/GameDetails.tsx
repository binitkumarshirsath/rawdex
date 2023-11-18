import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Spinner from "../components/Sidebar/Spinner";

const GameDetails = () => {
  const { slug } = useParams();

  // by appending the slug with ! , we tell ts , that this will never be undefined
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

  return <div className="p-5">{game.description_raw}</div>;
};

export default GameDetails;
