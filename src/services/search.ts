import http from 'utils/http';
import { ISearchPayload } from 'stores/types';

export const search = async (query: { q: string }): Promise<ISearchPayload> =>
  http.get({
    url: '/search/users',
    query,
  });
