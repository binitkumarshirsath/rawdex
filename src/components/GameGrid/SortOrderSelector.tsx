import { MdArrowDropDown } from "react-icons/md";

interface Props {
  handleSelectingSortOrder: (sortOrder: string) => void;
  sortOrder: string | undefined;
}

const SortOrderSelector = ({ handleSelectingSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metacritic",
      label: "Popular",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];

  const currentSortOrder = sortOrders.find((sort) => sort.value === sortOrder);
  return (
    <div className="dropdown  mb-1 ml-10  ">
      <label
        tabIndex={0}
        className="dark:bg-gray-700 font-Montserrat font-thin tracking-wider px-4 py-2 bg-gray-500 text-white rounded-sm flex gap-2 items-center"
      >
        Order by: {currentSortOrder?.label || "Relevance"} <MdArrowDropDown />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content font-Montserrat  tracking-widest  dark:bg-gray-700 mt-2 rounded-sm text-white w-full bg-gray-500 z-[1]   shadow"
      >
        {sortOrders.map((order) => (
          <li
            className="py-2 cursor-pointer first-letter px-2 dark:hover:bg-gray-500  rounded-sm"
            key={order.value}
            onClick={() => handleSelectingSortOrder(order.value)}
          >
            {order.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortOrderSelector;
