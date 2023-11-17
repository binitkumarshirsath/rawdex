import useGenres from "../../hooks/useGenres";
import Spinner from "../Sidebar/Spinner";

interface Props {
  handleClick: (genreId: number) => void;
  selectedGenre: number | undefined;
}

const SideBar = ({ handleClick, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return null;
  }
  return (
    <aside
      id="default-sidebar"
      className=" transition-transform max-w-[180px]  sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full  py-4 overflow-y-auto rounded-lg  ">
        <ul className="space-y-2 font-medium cursor-pointer">
          {data?.results.map((genre) => (
            <li key={genre.id} onClick={() => handleClick(genre.id)}>
              <div
                className={`flex ${
                  genre.id === selectedGenre
                    ? "dark:bg-gray-800 bg-slate-200"
                    : ""
                } items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <img
                  src={genre.image_background}
                  className="h-12 w-12 rounded-2xl object-cover "
                  alt="genrelist"
                />
                <span className="ml-3 text-lg font-Montserrat">
                  {genre.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
