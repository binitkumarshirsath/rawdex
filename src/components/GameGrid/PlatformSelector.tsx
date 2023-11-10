import { Platform } from "../../hooks/useGames";
import usePlatForm from "../../hooks/usePlatForm";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  handleSelectingPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  handleSelectingPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatForm();
  if (error) {
    return null;
  }

  return (
    <div className="dropdown dropdown-hover dropdown-content mb-1 ml-10  ">
      <label
        tabIndex={0}
        className="dark:bg-gray-700 font-Montserrat font-thin tracking-wider px-4 py-2 bg-gray-500 text-white rounded-sm flex gap-2 items-center"
      >
        {selectedPlatform?.name || "Platforms"} <MdArrowDropDown />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content font-Montserrat tracking-widest  dark:bg-gray-700 mt-2 rounded-sm text-white bg-gray-500 z-[1]   shadow"
      >
        {data.map((platform) => (
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