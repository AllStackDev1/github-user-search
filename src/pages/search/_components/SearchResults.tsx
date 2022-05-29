import { Box, Stack, Heading, Divider } from '@chakra-ui/react';
import { FC } from 'react';

import { ISearchPayload } from 'stores/types';

import UserDetails from './UserDetails';

const SearchResults: FC<{ data: ISearchPayload }> = ({ data }) => (
  <Box pt={10}>
    <Stack spacing={3} divider={<Divider />}>
      <Heading fontWeight={600} fontSize="xl">
        {data.total_count} users found
      </Heading>

      <Stack py={4} spacing={4} divider={<Divider />}>
        {data.items.map((item) => (
          <UserDetails
            key={item.id}
            login={item.login}
            avatar={item.avatar_url}
          />
        ))}
      </Stack>
    </Stack>
  </Box>
);

export default SearchResults;
