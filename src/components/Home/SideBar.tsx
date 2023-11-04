import useGenres from "../../hooks/useGenres";

const SideBar = () => {
  const { genres } = useGenres();

  return (
    <div className="min-w-[200px]">
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default SideBar;
