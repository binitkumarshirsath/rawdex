import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="grid grid-col-8">
      <div className="col-span-8">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
