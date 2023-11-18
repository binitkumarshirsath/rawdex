import Main from "../components/Home/Main";
import SideBar from "../components/Home/SideBar";

const Home = () => {
  return (
    <>
      <div className=" col-span-1 hidden md:block md:mt-10 ml-2">
        <div className="font-Montserrat my-4 text-4xl">Genres</div>
        <SideBar />
      </div>
      <div className=" md:col-span-7  col-span-8">
        <Main />
      </div>
    </>
  );
};

export default Home;
