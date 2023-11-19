import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= 300) {
    return children;
  }

  const summary = isExpanded ? children : children.slice(0, limit) + "...";

  return (
    <div className="font-Montserrat tracking-wider text-sm dark:text-gray-300">
      {summary}
      <button
        className="dark:bg-yellow-400 border-2 ml-4 bg-blue-400 border-blue-300 dark:border-yellow-300 px-3 font-mont font-semibold rounded-lg py-1 text-gray-900"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? " Read less" : " Read more"}
      </button>
    </div>
  );
};

export default ExpandableText;
