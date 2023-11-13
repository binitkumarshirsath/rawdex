import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      console.log(pageParam);

      return apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
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
