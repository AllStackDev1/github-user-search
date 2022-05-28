import {
  FC,
  useMemo,
  useState,
  Dispatch,
  createContext,
  useContext,
} from 'react';

const AppContext = createContext({});

export interface IAppContext {
  color1: string;
  color2: string;
  pageTitle: string;
  setPageTitle: Dispatch<React.SetStateAction<string>>;
}

export const AppContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pageTitle, setPageTitle] = useState<string>('Welcome');

  const value = useMemo(() => ({ pageTitle, setPageTitle }), [pageTitle]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = (): IAppContext => useContext(AppContext) as IAppContext;

export default useApp;
