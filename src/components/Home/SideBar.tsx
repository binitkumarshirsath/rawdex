import useGenres, { Genre } from "../../hooks/useGenres";
import Spinner from "../Sidebar/Spinner";

interface Props {
  handleClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const SideBar = ({ handleClick, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (loading) {
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
          {data.map((genre) => (
            <li key={genre.id} onClick={() => handleClick(genre)}>
              <div
                className={`flex ${
                  genre.id === selectedGenre?.id
                    ? "dark:bg-gray-800 bg-slate-200"
                    : ""
                } items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <img
                  src={genre.image_background}
                  className="h-12 w-12 rounded-sm"
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
