import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo.png";
import SearchInput from "../GameGrid/SearchInput";

const Navbar = () => {
  return (
    <div className="flex  h-20  mx-auto md:gap-10 items-center ">
      <img src={logo} alt="Logo" className="h-10 rounded-lg ml-10" />

      <SearchInput />

      <div className="mr-10">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
