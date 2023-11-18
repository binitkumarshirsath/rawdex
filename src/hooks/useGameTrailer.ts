import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (id: string | number) => {
  const apiClient = new APIClient<GameTrailer>("/games/" + id + "/movies");
  return useQuery({
    queryKey: ["game", id],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameTrailer;
