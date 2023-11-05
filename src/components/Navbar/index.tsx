import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20 w-11/12 mx-auto items-center ">
      <div>
        <img src={logo} alt="Logo" className="h-10 rounded-lg" />
      </div>
      <div className="ml-10">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
