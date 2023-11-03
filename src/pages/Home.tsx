import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-col-8">
        <div className=" bg-red-500 col-span-8">
          <Navbar />
        </div>
        <div className="bg-yellow-800 col-span-1 hidden md:block">
          <SideBar />
        </div>
        <div className="bg-blue-500 md:col-span-7 col-span-8">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
