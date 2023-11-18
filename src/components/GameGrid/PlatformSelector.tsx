import { MdArrowDropDown } from "react-icons/md";
import usePlatForm from "../../hooks/usePlatForm";
import useGameQuery from "../../store/GameQuery";
import { useState } from "react";

const PlatformSelector = () => {
  const { gameQuery, setPlatformQuery } = useGameQuery();

  const { data, error } = usePlatForm();

  const platform = data?.results.find((p) => p.id === gameQuery?.platformId);
  const [isPlatformSelectorOpen, setIsPlatformSelectorOpen] = useState(false);
  if (error) {
    return null;
  }

  return (
    <div className="dropdown  dropdown-content mb-1 ">
      <label
        tabIndex={0}
        onClick={() => setIsPlatformSelectorOpen(!isPlatformSelectorOpen)}
        className="dark:bg-gray-700 font-Montserrat font-thin tracking-wider px-4 py-2 bg-gray-500 text-white rounded-sm flex gap-2 items-center"
      >
        {platform?.name || "Platforms"} <MdArrowDropDown />
      </label>
      {isPlatformSelectorOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content font-Montserrat tracking-widest  dark:bg-gray-700 mt-2 rounded-sm text-white bg-gray-500 z-[1]   shadow"
        >
          {data?.results.map((platform) => (
            <li
              className="py-2 cursor-pointer first-letter px-2 dark:hover:bg-gray-500  rounded-sm"
              key={platform.id}
              onClick={() => {
                setPlatformQuery(platform.id), setIsPlatformSelectorOpen(false);
              }}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;
