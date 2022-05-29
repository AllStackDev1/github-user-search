import {
  Box,
  Stack,
  Heading,
  Button,
  Divider,
  ButtonProps,
  Container,
} from '@chakra-ui/react';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { searchStore } from 'stores/search';
import UserDetails from './UserDetails';

import 'assets/css/custom.css';

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
    _hover={{ borderWidth: 1 }}
    {...rest}
  >
    {title}
  </Button>
);

const SearchResults = () => {
  const { data, query, search } = searchStore((e) => e);

  return (
    <Box pt={10}>
      <Stack spacing={3} divider={<Divider />}>
        <Heading fontWeight={600} fontSize="xl">
          {data?.total_count} users found
        </Heading>

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
