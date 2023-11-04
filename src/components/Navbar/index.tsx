import ToggleButton from "./ToggleButton";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20  items-center px-5">
      <div>
        <img src={logo} alt="Logo" className="h-10 rounded-lg" />
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
