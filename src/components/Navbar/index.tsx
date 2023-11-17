import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo2.png";
import SearchInput from "../GameGrid/SearchInput";

const Navbar = () => {
  return (
    <div className="flex  h-20  mx-auto md:gap-10  gap-4 items-center ">
      <img
        src={logo}
        alt="Logo"
        className="h-24 rounded-lg md:ml-10 object-cover "
      />

      <SearchInput />

      <div className="mr-10">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
