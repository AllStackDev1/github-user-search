import {
  Box,
  Icon,
  Text,
  Input,
  HStack,
  Stack,
  Link,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { searchStore } from 'stores/search';

const SearchComp = () => {
  const { search } = searchStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => search(data);

  const buttonColor = useColorModeValue('brand.200', 'brand.100');

  return (
    <Box p={20}>
      <Stack spacing={4}>
        <HStack>
          <Icon as={FiSearch} boxSize={6} />
          <Heading fontSize="2xl">
            Search more than{' '}
            <Text as="span" fontWeight={700}>
              553M
            </Text>{' '}
            Users{' '}
          </Heading>
        </HStack>

        <HStack as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            h={9}
            isRequired
            placeholder="Search GitHub Users"
            _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
            {...register('q', { required: true })}
          />

          <Button
            h={9}
            px={6}
            type="submit"
            borderWidth={1}
            bg={buttonColor}
            // isDisabled={!isDirty}
            isLoading={isSubmitting}
          >
            Search
          </Button>
        </HStack>

        <Box>
          <Text>
            <Text as="span" fontSize="bold">
              ProTip!
            </Text>
            {' For an '}
            <Link as={ReactLink} to="#" color="blue.300">
              advanced search
            </Link>
            , use some of our{' '}
            <Link as={ReactLink} to="#" color="blue.300">
              prefixes
            </Link>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchComp;
