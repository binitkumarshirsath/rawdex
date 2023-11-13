import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  handleSearchQuery: (search: string) => void;
}
const SearchInput = ({ handleSearchQuery }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ref.current) {
      handleSearchQuery(ref.current.value);
    }
  };

  return (
    <div className="relative w-full ">
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="text"
          placeholder="Search Games...."
          className="input input-bordered  pl-10 text-black font-Montserrat tracking-wider w-full min-w-[100px]"
        />
        <div
          onClick={handleSubmit}
          className="absolute text-black dark:text-black left-2 top-0 translate-y-3"
        >
          <BsSearch size={27} />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
