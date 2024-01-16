import { useEffect, useState } from "react";

const useDebounce = (value: string, duration = 1000) => {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, duration);

    return () => clearTimeout(timer);
  });

  return debounce;
};

export default useDebounce;
