import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../store/GameQuery";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
          page: pageParam,
        },
      });
    },

    staleTime: 12 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      // lastpage is a single useQuery doc [single response]
      // allpages is accumulation of all last page response...maybe
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
