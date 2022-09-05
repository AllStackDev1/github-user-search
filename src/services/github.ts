import axios from 'axios';
import qs from 'query-string';

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
});

interface IGet {
  url: string;
  query?: Record<string, any>;
}

const get = async <T>({ url, query = {} }: IGet): Promise<T> => {
  const queryString = `?${qs.stringify(query)}`;
  const response = await github.get(`${url + queryString}`);
  return response.data;
};

const methods = {
  get,
};

export default methods;
