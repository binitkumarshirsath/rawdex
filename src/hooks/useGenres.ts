import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading, error };
};

export default useGenres;
