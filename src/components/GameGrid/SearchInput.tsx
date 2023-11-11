import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder="Search Games...."
        className="input input-bordered pl-10 text-black font-Montserrat tracking-wider w-full min-w-[100px]"
      />
      <div className="absolute text-black left-2 top-0 translate-y-3">
        <BsSearch size={27} />
      </div>
    </div>
  );
};

export default SearchInput;
