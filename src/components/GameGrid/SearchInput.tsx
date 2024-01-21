import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../../store/GameQuery";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchQuery = useGameQuery((s) => s.setSearchQuery);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ref.current) {
      setSearchQuery(input);
      navigate("/");
    }
  };

  return (
    <div className="relative w-full  ">
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            navigate("/");
          }}
          value={input}
          placeholder="Search Games...."
          className="input input-bordered dark:text-white text-white  pl-10 text-black font-Montserrat tracking-wider w-full min-w-[100px]"
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
