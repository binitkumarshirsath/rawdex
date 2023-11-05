import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface ApiResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<ApiResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
};
export default useData;
