import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../pages/Home";
import apiClient, { ApiResponse } from "../services/api-client";
import { Platform } from "./usePlatForm";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery | null) => {
  const getGames = () =>
    apiClient
      .get<ApiResponse<Game>>("/games", {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
        },
      })
      .then((res) => res.data.results);

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: getGames,
    staleTime: 12 * 60 * 60 * 1000,
  });
};

export default useGames;
