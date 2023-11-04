interface Props {
  score: number;
}

const CriticScoreBadge = ({ score }: Props) => {
  const color =
    score > 75
      ? "bg-green-100 text-green-800 dark:text-green-300  dark:bg-green-900"
      : score > 50
      ? "bg-yellow-100 text-yellow-800 dark:text-yellow-300  dark:bg-yellow-900"
      : "bg-white-100 text-white-800 dark:text-white-300  dark:bg-white-900";
  return (
    <>
      <span
        className={`flex items-center  ${color} text-sm font-medium mr-2 px-2.5 py-0.5 rounded `}
      >
        {score}
      </span>
    </>
  );
};

export default CriticScoreBadge;
