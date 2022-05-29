/* eslint-disable @typescript-eslint/consistent-type-imports */
import axios from 'axios';
import qs from 'query-string';

import { GITHUB_BASE_API } from './envs';

interface IDelete {
  url: string;
}

interface IPost extends IDelete {
  body?: string;
}

type IPatch = IPost;

type IPut = IPost;

interface IGet extends IDelete {
  query?: Record<string, any>;
}

class HttpFacade {
  private http;

  constructor() {
    this.http = axios.create({
      baseURL: GITHUB_BASE_API,
      headers: { 'Content-Type': 'application/json' },
    });

    this.http.interceptors.request.use(
      (config) => {
        const token =
          window.sessionStorage.getItem('auth_token') ||
          window.localStorage.getItem('auth_token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          window.location.href = '/auth/logout';
        }
        return Promise.reject(error.response);
      }
    );
  }

  post = async ({ url, body }: IPost) => {
    const response = await this.http.post(url, body);
    return response.data;
  };

  patch = async ({ url, body }: IPatch) => {
    const response = await this.http.patch(url, body);
    return response.data;
  };

  get = async ({ url, query = {} }: IGet) => {
    const queryString = `?${qs.stringify(query)}`;
    const response = await this.http.get(`${url + queryString}`);
    return response.data;
  };

  delete = async ({ url }: IDelete) => {
    const response = await this.http.delete(url);
    return response.data;
  };

  put = async ({ url, body }: IPut) => {
    const response = await this.http.put(url, body);
    return response.data;
  };
}

export default new HttpFacade();
