import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo2.png";
import SearchInput from "../GameGrid/SearchInput";

interface Props {
  handleSearchQuery: (search: string) => void;
}

const Navbar = ({ handleSearchQuery }: Props) => {
  return (
    <div className="flex  h-20  mx-auto md:gap-10  gap-4 items-center ">
      <img
        src={logo}
        alt="Logo"
        className="h-24 rounded-lg md:ml-10 object-cover "
      />

      <SearchInput handleSearchQuery={handleSearchQuery} />

      <div className="mr-10">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
