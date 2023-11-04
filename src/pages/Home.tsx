import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <div className="grid grid-col-8">
        <div className="  col-span-8 row-span-1">
          <Navbar />
        </div>
        <div className=" col-span-1 hidden md:block">
          <SideBar />
        </div>
        <div className=" md:col-span-7 col-span-8">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
