import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameScreenshot } from "../entities/GameScreenshot";

const useGameScreenshots = (gameId: string | number) => {
  const apiClient = new APIClient<GameScreenshot>(
    "/games/" + gameId + "/screenshots"
  );
  return useQuery({
    queryKey: ["games screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameScreenshots;
