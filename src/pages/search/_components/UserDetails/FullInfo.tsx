import { FC } from 'react';
import { useQuery } from 'react-query';
import {
  Text,
  Icon,
  Flex,
  Grid,
  Link,
  Image,
  Avatar,
  Stack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUser, FiUsers, FiChevronsLeft } from 'react-icons/fi';

import { FaTwitter } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { RiGitRepositoryLine } from 'react-icons/ri';

import Logo32 from 'assets/images/GitHub-Mark-32px.png';
import LogoLight32 from 'assets/images/GitHub-Mark-Light-32px.png';

import { getUserInfo } from 'services/search';
import Loading from '../Loading';

const FullInfo: FC<{ login: string; avatar: string; onToggle: () => void }> = ({
  login,
  avatar,
  onToggle,
}) => {
  const logo = useColorModeValue(Logo32, LogoLight32);

  const { data, isLoading } = useQuery(
    [`/${login}`],
    () => getUserInfo(login),
    {
      retry: true,
      staleTime: 10 * 60 * 1000,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    }
  );

  return isLoading ? (
    <Loading login={login} />
  ) : (
    <Stack>
      <HStack>
        <Avatar
          bg="white"
          fontSize="sm"
          color="brand.100"
          name="Chinedu Okpala"
          size="xl"
          src={avatar}
        />

        <Grid rowGap={3} columnGap={4} templateColumns="repeat(4, 1fr)">
          <HStack>
            <Icon as={FiUser} boxSize={4} />
            <Text>{login}</Text>
          </HStack>
          <Link href={data?.html_url} rel="noreferrer" target="_blank">
            <HStack>
              <Image src={logo} alt="logo" boxSize={4} />
              <Text>View Profile</Text>
            </HStack>
          </Link>
          <HStack>
            <Icon as={FiUsers} boxSize={4} />
            <Text>{data?.followers} followers</Text>
          </HStack>
          <HStack>
            <Icon as={FiUsers} boxSize={4} />
            <Text>{data?.following} following</Text>
          </HStack>
          {data?.location && (
            <HStack>
              <Icon as={GoLocation} boxSize={4} />
              <Text>{data.location}</Text>
            </HStack>
          )}
          <HStack>
            <Icon as={RiGitRepositoryLine} boxSize={4} />
            <Text>{data?.public_repos} public repos</Text>
          </HStack>
          {data?.blog && (
            <Link href={data.blog} rel="noreferrer" target="_blank">
              <HStack>
                <Icon as={BiLinkExternal} boxSize={4} />
                <Text>Blog</Text>
              </HStack>
            </Link>
          )}
          {data?.twitter_username && (
            <Link
              href={`https://www.twitter.com/${data.twitter_username}`}
              rel="noreferrer"
              target="_blank"
            >
              <HStack>
                <Icon as={FaTwitter} boxSize={4} />
                <Text>Follow</Text>
              </HStack>
            </Link>
          )}
        </Grid>
      </HStack>
      <Stack>
        {data?.name && <Text>{data?.name}</Text>}
        {data?.email && <Text>{data?.email}</Text>}
        {data?.bio && <Text>{data?.bio}</Text>}
        <Flex
          role="button"
          align="center"
          color="brand.blue.link"
          onClick={() => onToggle()}
        >
          <Icon as={FiChevronsLeft} />
          <Text as="span">less</Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default FullInfo;
