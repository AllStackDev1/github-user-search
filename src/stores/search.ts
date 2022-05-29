import create from 'zustand';
import QueryString from 'query-string';
// import { persist } from 'zustand/middleware';

import { searchUsers } from 'services/search';
import { ISearchStore } from './types';

export const searchStore = create<ISearchStore>((set) => ({
  data: null,
  isLoading: false,
  query: { page: 1, per_page: 20 },
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
