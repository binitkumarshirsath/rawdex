import { MdArrowDropDown } from "react-icons/md";
import usePlatForm, { Platform } from "../../hooks/usePlatForm";
import { GameQuery } from "../../pages/Home";

interface Props {
  handleSelectingPlatform: (platform: Platform) => void;
  gameQuery: GameQuery | null;
}

const PlatformSelector = ({ handleSelectingPlatform, gameQuery }: Props) => {
  const { data, error } = usePlatForm();
  if (error) {
    return null;
  }
  return (
    <div className="dropdown  dropdown-content mb-1 ">
      <label
        tabIndex={0}
        className="dark:bg-gray-700 font-Montserrat font-thin tracking-wider px-4 py-2 bg-gray-500 text-white rounded-sm flex gap-2 items-center"
      >
        {gameQuery?.platform?.name || "Platforms"} <MdArrowDropDown />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content font-Montserrat tracking-widest  dark:bg-gray-700 mt-2 rounded-sm text-white bg-gray-500 z-[1]   shadow"
      >
        {data?.map((platform) => (
          <li
            className="py-2 cursor-pointer first-letter px-2 dark:hover:bg-gray-500  rounded-sm"
            key={platform.id}
            onClick={() => handleSelectingPlatform(platform)}
          >
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
