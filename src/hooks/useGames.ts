import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { games, errors, loading };
};

export default useGames;
