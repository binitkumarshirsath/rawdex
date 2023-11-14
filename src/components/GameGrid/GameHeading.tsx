import useGenres from "../../hooks/useGenres";
import usePlatForm from "../../hooks/usePlatForm";
import { GameQuery } from "../../pages/Home";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery?.genreId);

  const { data: platforms } = usePlatForm();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery?.platformId
  );

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <div className="font-Montserrat my-4 text-4xl">{heading}</div>;
};

export default GameHeading;
