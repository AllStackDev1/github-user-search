import { FC } from 'react';
import { Text, Button, VStack } from '@chakra-ui/react';
import { IoIosRefresh } from 'react-icons/io';

interface IProps {
  error?: string;
  reload(): void;
}

const ErrorReloadButton: FC<IProps> = ({ error, reload }) => (
  <VStack>
    <Text>{error || 'Something went wrong'}</Text>
    <Button
      size="md"
      fontSize={20}
      rounded="20px"
      onClick={reload}
      colorScheme="twitter"
      leftIcon={<IoIosRefresh />}
    >
      <Text fontSize="md">Try again</Text>
    </Button>
  </VStack>
);

export default ErrorReloadButton;
