import http from 'utils/http';
import { ISearchPayload, IUserInfo } from 'stores/types';

export const searchUsers = async (query: {
  q: string;
}): Promise<ISearchPayload> => http.get({ url: '/search/users', query });

export const getUserInfo = async (username: string): Promise<IUserInfo> =>
  http.get({ url: `/users/${username}` });
