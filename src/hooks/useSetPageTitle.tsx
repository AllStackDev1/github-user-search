/* eslint-disable no-console */
import { useEffect } from 'react';
import useApp from 'context/app';

const useSetPageTitle = (title: string) => {
  const { setPageTitle } = useApp();

  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);

  return null;
};

export default useSetPageTitle;
