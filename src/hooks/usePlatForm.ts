import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { ApiResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatForm = () => {
  const getPlatForm = () =>
    apiClient
      .get<ApiResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data.results)
      .catch((err) => console.log(err));

  return useQuery({
    queryKey: ["platforms"],
    queryFn: getPlatForm,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatForm;
