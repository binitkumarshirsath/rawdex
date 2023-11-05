import useGenres from "../../hooks/useGenres";

const SideBar = () => {
  const { data } = useGenres();

  return (
    <div className="min-w-[200px]">
      {data.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default SideBar;
