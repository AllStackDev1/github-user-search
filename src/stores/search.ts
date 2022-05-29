import create from 'zustand';
import QueryString from 'query-string';
// import { persist } from 'zustand/middleware';

import { searchUsers } from 'services/search';
import { ISearchPayload } from './types';

export interface ISearchStore {
  error?: string;
  isLoading?: boolean;
  query?: { q: string };
  data: ISearchPayload | null;
  search: (query: { q: string }) => Promise<void>;
}

export const searchStore = create<ISearchStore>((set) => ({
  data: null,
  isLoading: false,
  search: async (query) => {
    try {
      set(() => ({ isLoading: true }));
      window.history.pushState('', '', `?${QueryString.stringify(query)}`);
      const data = await searchUsers(query);
      set(() => ({ data, query, isLoading: false }));
    } catch (err: any) {
      const error =
        err?.message || err?.data?.message || 'Unexpected network error.';
      set(() => ({ isLoading: false, error }));
    }
  },
}));
