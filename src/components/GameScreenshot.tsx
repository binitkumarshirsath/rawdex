import useGameScreenshots from "../hooks/useGameScreenshots";
import Spinner from "./Sidebar/Spinner";

interface Props {
  gameId: string;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data, isError, isLoading } = useGameScreenshots(gameId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return null;
  }
  return (
    <div className="mt-7 gap-2 mx-auto">
      <div className="font-Montserrat text-3xl font-semibold dark:text-gray-400 ">
        Game Screenshots
      </div>
      <div className="grid md:grid-cols-2 ">
        {data?.results.map((i) => (
          <img key={i.id} className="my-1" src={i.image} />
        ))}
      </div>
    </div>
  );
};

export default GameScreenshot;
