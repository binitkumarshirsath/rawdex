import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: string;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data } = useGameScreenshots(gameId);

  return (
    <div className="grid grid-cols-2 gap-2 mx-auto">
      {data?.results.map((i) => (
        <img key={i.id} src={i.image} />
      ))}
    </div>
  );
};

export default GameScreenshot;
