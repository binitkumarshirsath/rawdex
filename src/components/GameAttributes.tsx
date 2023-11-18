interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const GameAttributes = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="dark:text-gray-400 font-semibold font-Montserrat">
        {title}
      </div>
      <div className="dark:text-gray-600 w-fit  font-medium font-Montserrat">
        {children}
      </div>
    </div>
  );
};

export default GameAttributes;
