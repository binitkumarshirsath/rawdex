import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";
const apiClient = new APIClient<Game>("games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: [slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGame;
