import http from 'utils/http';
import { IUserInfo, IQueryPayload, ISearchPayload } from 'stores/types';

export const searchUsers = async (
  query: IQueryPayload
): Promise<ISearchPayload> => http.get({ url: '/search/users', query });

export const getUser = async (username: string): Promise<IUserInfo> =>
  http.get({ url: `/users/${username}` });
