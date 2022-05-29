import { useEffect } from 'react';
import qs from 'query-string';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import useSetPageTitle from 'hooks/useSetPageTitle';
import { searchStore } from 'stores/search';

import Footer from './_components/Footer';
import SearchComp from './_components/SearchComp';
import SearchResults from './_components/SearchResults';

const Search = (): JSX.Element => {
  const { search } = useLocation();
  const { data, query, search: triggerReload } = searchStore((e) => e);

  useEffect(() => {
    if (search) {
      const qq = qs.parse(search) as any;
      triggerReload({ ...query, ...qq });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useSetPageTitle(query?.q ? `Code . ${query?.q}` : 'Code Search User');

  return (
    <Box px={20}>
      {data ? <SearchResults /> : <SearchComp />}
      <Footer />
    </Box>
  );
};

export default Search;
