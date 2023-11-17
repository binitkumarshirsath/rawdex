import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStoreType {
  gameQuery: GameQuery;
  setSearchQuery: (search: string) => void;
  setPlatformQuery: (platformId: number) => void;
  setGenreQuery: (genreId: number) => void;
  setSortOrderQuery: (sortOrder: string) => void;
}

const useGameQuery = create<GameQueryStoreType>((set) => ({
  gameQuery: {},
  setSearchQuery: (search) => set(() => ({ gameQuery: { search } })),
  setGenreQuery: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformQuery: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrderQuery: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQuery;
