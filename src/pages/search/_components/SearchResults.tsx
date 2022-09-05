import {
  Box,
  Stack,
  Heading,
  Button,
  Divider,
  ButtonProps,
  Container,
  Flex,
} from '@chakra-ui/react';
import { FC } from 'react';
import pluralize from 'pluralize';
import ReactPaginate from 'react-paginate';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { githubStore } from 'stores/github';
import UserDetails from './UserDetails';

const PageButton: FC<{ title: string } & ButtonProps> = ({
  title,
  ...rest
}) => (
  <Button
    h={9}
    px={3}
    fontSize="sm"
    borderWidth={0}
    variant="outline"
    color="brand.blue.link"
    _hover={{ bg: 'transparent' }}
    {...rest}
  >
    {title}
  </Button>
);

const SearchResults = () => {
  const { data, query, search, clear } = githubStore((e) => e);

  return (
    <Box pt={10}>
      <Stack spacing={3} divider={<Divider />}>
        <Flex align="center" justify="space-between">
          <Heading fontWeight={600} fontSize="xl">
            {data?.total_count} {pluralize('user', 0)} found
          </Heading>

          <Button colorScheme="twitter" onClick={() => clear()}>
            Reset All
          </Button>
        </Flex>

        <Stack py={4} spacing={4} divider={<Divider />}>
          {data?.items.map((item) => (
            <UserDetails
              key={item.id}
              login={item.login}
              avatar={item.avatar_url}
            />
          ))}
        </Stack>
      </Stack>

      <Container my={6} minW={{ lg: 'xl' }}>
        <ReactPaginate
          breakLabel="..."
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          activeClassName="active"
          breakClassName="break-me"
          containerClassName="pagination"
          pageCount={(data?.total_count || 0) / query.per_page}
          nextLabel={<PageButton rightIcon={<FiChevronRight />} title="Next" />}
          previousLabel={
            <PageButton leftIcon={<FiChevronLeft />} title="Previous" />
          }
          onPageChange={({ selected }) =>
            search({ ...query, page: selected + 1 })
          }
        />
      </Container>
    </Box>
  );
};

export default SearchResults;
