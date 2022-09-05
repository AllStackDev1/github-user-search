export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  site_admin: boolean;
}

export interface ISearchPayload {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
}

export interface IUserInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: true;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface IQueryPayload {
  q?: string;
  page: number;
  per_page: number;
}
export interface ISearchStore {
  error?: string;
  isLoading?: boolean;
  query: IQueryPayload;
  searchKey: string;
  data: ISearchPayload | null;
  userInfo?: IUserInfo | null;
  getUser: (username: string) => Promise<void>;
  search: (query: IQueryPayload) => Promise<void>;
}
