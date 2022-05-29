import { FC } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import SmallInfo from './SmallInfo';
import FullInfo from './FullInfo';

const UserDetails: FC<{ login: string; avatar: string }> = ({
  login,
  avatar,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return !isOpen ? (
    <SmallInfo login={login} avatar={avatar} onToggle={onToggle} />
  ) : (
    <FullInfo login={login} avatar={avatar} onToggle={onToggle} />
  );
};

export default UserDetails;
