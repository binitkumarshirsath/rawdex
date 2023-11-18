import useGameTrailer from "../hooks/useGameTrailer";
import Spinner from "./Sidebar/Spinner";

interface Props {
  gameId: string | number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isError, isLoading } = useGameTrailer(gameId!);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return null;
  }

  const first = data?.results[0];
  if (!first) {
    return null;
  }

  return <video controls poster={first.preview} src={first.data.max}></video>;
};

export default GameTrailer;
