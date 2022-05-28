import { Box } from '@chakra-ui/react';
import useSetPageTitle from 'hooks/useSetPageTitle';
import Footer from './_components/Footer';
import SearchComp from './_components/SearchComp';

const Search = (): JSX.Element => {
  useSetPageTitle('Code Search User');

  return (
    <Box px={20}>
      <SearchComp />
      <Footer />
    </Box>
  );
};

export default Search;
