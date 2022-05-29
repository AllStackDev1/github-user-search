import { FC } from 'react';
import {
  Grid,
  Text,
  Icon,
  Image,
  Stack,
  HStack,
  Skeleton,
  SkeletonCircle,
  useColorModeValue,
  SkeletonText,
} from '@chakra-ui/react';
import { FiUser, FiUsers } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { RiGitRepositoryLine } from 'react-icons/ri';

import Logo32 from 'assets/images/GitHub-Mark-32px.png';
import LogoLight32 from 'assets/images/GitHub-Mark-Light-32px.png';

const Loading: FC<{ login: string }> = ({ login }) => {
  const logo = useColorModeValue(Logo32, LogoLight32);

  return (
    <Stack>
      <HStack>
        <SkeletonCircle size="20" />
        <Grid rowGap={3} columnGap={4} templateColumns="repeat(4, 1fr)">
          <HStack>
            <Icon as={FiUser} boxSize={4} />
            <Text>{login}</Text>
          </HStack>

          <HStack>
            <Image src={logo} alt="logo" boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>

          <HStack>
            <Icon as={FiUsers} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
          <HStack>
            <Icon as={FiUsers} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
          <HStack>
            <Icon as={GoLocation} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
          <HStack>
            <Icon as={RiGitRepositoryLine} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
          <HStack>
            <Icon as={BiLinkExternal} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
          <HStack>
            <Icon as={FaTwitter} boxSize={4} />
            <Skeleton height="14px" w={28} />
          </HStack>
        </Grid>
      </HStack>
      <Stack>
        <SkeletonText noOfLines={3} />
      </Stack>
    </Stack>
  );
};

export default Loading;
