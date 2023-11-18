import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Spinner from "../components/Sidebar/Spinner";
import ExpandableText from "../components/ExpandableText";

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
    </div>
  );
};

export default GameDetails;
