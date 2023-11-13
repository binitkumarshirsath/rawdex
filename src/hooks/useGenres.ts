import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { ApiResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const getGenres = () =>
    apiClient
      .get<ApiResponse<Genre>>("/genres")
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

  return useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGenres;
