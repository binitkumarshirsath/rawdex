import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo2.png";
import SearchInput from "../GameGrid/SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  h-20  mx-auto md:gap-10  gap-4 items-center ">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          className="h-24 rounded-lg md:ml-10 object-cover "
        />
      </Link>

      <SearchInput />

      <div className="mr-10">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
