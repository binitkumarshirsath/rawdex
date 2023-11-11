import { GameQuery } from "../../pages/Home";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;
  return <div className="font-Montserrat my-4 text-4xl">{heading}</div>;
};

export default GameHeading;
