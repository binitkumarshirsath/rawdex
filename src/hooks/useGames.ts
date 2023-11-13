import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../pages/Home";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatForm";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
        },
      }),
    staleTime: 12 * 60 * 60 * 1000,
  });
};

export default useGames;
