import create from 'zustand';
import { persist } from 'zustand/middleware';

import { search } from 'services/search';
import { ISearchPayload } from './types';

export interface ISearchStore {
  error?: string;
  isLoading?: boolean;
  data: ISearchPayload | null;
  search: (query: { q: string }) => Promise<void>;
}

export const searchStore = create(
  persist<ISearchStore>(
    (set) => ({
      data: null,
      isLoading: false,
      search: async (query) => {
        try {
          set(() => ({ isLoading: true }));
          const res = await search(query);
          set(() => ({ isLoading: false, data: res }));
        } catch (err: any) {
          const error =
            err?.message || err?.data?.message || 'Unexpected network error.';
          set(() => ({ isLoading: false, error }));
        }
      },
    }),
    {
      name: 'search-storage',
      getStorage: () => sessionStorage,
    }
  )
);
