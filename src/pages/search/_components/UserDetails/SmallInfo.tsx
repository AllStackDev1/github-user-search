import { FC } from 'react';
import { Text, Icon, Flex, Avatar, HStack } from '@chakra-ui/react';
import { FiChevronsRight } from 'react-icons/fi';

const SmallInfo: FC<{
  login: string;
  avatar: string;
  onToggle: () => void;
}> = ({ login, avatar, onToggle }) => (
  <HStack>
    <Avatar
      bg="white"
      size="sm"
      name={login}
      src={avatar}
      fontSize="sm"
      color="brand.100"
    />
    <HStack>
      <Text>{login}</Text>

      <Flex
        role="button"
        align="center"
        color="blue.300"
        onClick={() => onToggle()}
      >
        <Text as="span">more</Text>
        <Icon as={FiChevronsRight} />
      </Flex>
    </HStack>
  </HStack>
);

export default SmallInfo;
