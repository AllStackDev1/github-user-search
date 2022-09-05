import create from 'zustand';
import QueryString from 'query-string';

import { persist } from 'zustand/middleware';
import { searchUsers, getUser } from 'services/search';
import { ISearchStore } from './types';

export const searchStore = create(
  persist<ISearchStore>(
    (set) => ({
      data: null,
      searchKey: '',
      userInfo: null,
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
      getUser: async (username) => {
        try {
          set(() => ({ isLoading: true }));
          const userInfo = await getUser(username);
          set(() => ({ userInfo, isLoading: false }));
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
