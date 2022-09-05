import { FC, useEffect } from 'react';
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

import { searchStore } from 'stores/search';
import Loading from '../Loading';

const FullInfo: FC<{ login: string; avatar: string; onToggle: () => void }> = ({
  login,
  avatar,
  onToggle,
}) => {
  const logo = useColorModeValue(Logo32, LogoLight32);
  const { isLoading, userInfo, getUser } = searchStore();

  useEffect(() => {
    getUser(login);
  }, [login, getUser]);

  if (isLoading) {
    return <Loading login={login} />;
  }

  if (userInfo) {
    return (
      <Stack>
        <HStack>
          <Avatar
            bg="white"
            size="xl"
            src={avatar}
            fontSize="sm"
            color="brand.100"
            name="Chinedu Okpala"
          />

          <Grid rowGap={3} columnGap={4} templateColumns="repeat(4, 1fr)">
            <HStack>
              <Icon as={FiUser} boxSize={4} />
              <Text>{login}</Text>
            </HStack>
            <Link href={userInfo?.html_url} rel="noreferrer" target="_blank">
              <HStack>
                <Image src={logo} alt="logo" boxSize={4} />
                <Text>View Profile</Text>
              </HStack>
            </Link>
            <HStack>
              <Icon as={FiUsers} boxSize={4} />
              <Text>{userInfo?.followers} followers</Text>
            </HStack>
            <HStack>
              <Icon as={FiUsers} boxSize={4} />
              <Text>{userInfo?.following} following</Text>
            </HStack>
            {userInfo?.location && (
              <HStack>
                <Icon as={GoLocation} boxSize={4} />
                <Text>{userInfo.location}</Text>
              </HStack>
            )}
            <HStack>
              <Icon as={RiGitRepositoryLine} boxSize={4} />
              <Text>{userInfo?.public_repos} public repos</Text>
            </HStack>
            {userInfo?.blog && (
              <Link href={userInfo.blog} rel="noreferrer" target="_blank">
                <HStack>
                  <Icon as={BiLinkExternal} boxSize={4} />
                  <Text>Blog</Text>
                </HStack>
              </Link>
            )}
            {userInfo?.twitter_username && (
              <Link
                href={`https://www.twitter.com/${userInfo.twitter_username}`}
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
          {userInfo?.name && <Text>{userInfo?.name}</Text>}
          {userInfo?.email && <Text>{userInfo?.email}</Text>}
          {userInfo?.bio && <Text>{userInfo?.bio}</Text>}
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
  }

  return <div />;
};

export default FullInfo;
