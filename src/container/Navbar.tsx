import { FC, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Link,
  Image,
  HStack,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { BsBell, BsPlus } from 'react-icons/bs';
import { Link as ReachRouter } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

import MotionBox from 'components/MotionBox';

// dark mode
import Logo32 from 'assets/images/GitHub-Mark-Light-32px.png';
import Logo64 from 'assets/images/GitHub-Mark-Light-64px.png';

import { searchStore } from 'stores/search';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar: FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const { query, search } = searchStore((e) => e);

  const [inputTouched, setInputTouched] = useState(false);

  const menus = [
    {
      link: '/pull-requests',
      name: 'Pull requests',
    },
    {
      link: '/issues',
      name: 'Issues',
    },
    {
      link: '/marketplace',
      name: 'Marketplace',
    },
    {
      link: '/explore',
      name: 'Explore',
    },
  ];

  const motionProps = {
    initial: 'collapsed',
    animate: inputTouched ? 'open' : 'collapsed',
    variants: {
      open: { width: '35rem', transition: { duration: 0.3 } },
      collapsed: { width: 'auto', transition: { duration: 0.3 } },
    },
  };

  useEffect(() => {
    if (query?.q) {
      setSearchKey(query?.q);
    }
  }, [query]);

  return (
    <Flex
      as="nav"
      w="full"
      h={16}
      px={10}
      top={0}
      left={0}
      right={0}
      shadow="md"
      pos="fixed"
      zIndex={100}
      bg="brand.100"
      color="white"
      align="center"
      justify="space-between"
    >
      <HStack spacing={4} w="full">
        <Link as={ReachRouter} to="/">
          <Box as="picture">
            <source srcSet={`${Logo64}`} />
            <Image src={Logo32} alt="logo" w={{ base: 8 }} h={{ base: 8 }} />
          </Box>
        </Link>

        {query?.q && (
          <MotionBox
            onFocus={() => setInputTouched(true)}
            onBlur={() => setInputTouched(false)}
            {...motionProps}
          >
            <InputGroup>
              <Input
                h={9}
                value={searchKey}
                placeholder="Search or jump to..."
                borderColor="rgba(255,255,255, 0.25)"
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && search({ q: searchKey })}
                _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
              />
              <InputRightElement h={9}>
                <Flex
                  h={5}
                  w={5}
                  rounded="sm"
                  fontSize="xs"
                  align="center"
                  justify="center"
                  borderWidth={1}
                  color="rgba(255,255,255, 0.25)"
                  borderColor="rgba(255,255,255, 0.25)"
                >
                  /
                </Flex>
              </InputRightElement>
            </InputGroup>
          </MotionBox>
        )}

        <HStack spacing={3}>
          {menus.map((m) => (
            <Link key={m.link} as={ReachRouter} to={m.link} fontWeight={600}>
              {m.name}
            </Link>
          ))}
        </HStack>
      </HStack>

      <HStack align="center" spacing={4}>
        <Flex role="button" align="center" justify="center" rounded="full">
          <Icon as={BsBell} boxSize={6} />
        </Flex>

        <Flex role="button" align="center" justify="center" rounded="full">
          <Icon as={BsPlus} boxSize={6} />
          <Icon as={IoMdArrowDropdown} boxSize={6} />
        </Flex>

        <Avatar
          w={10}
          h={10}
          bg="white"
          fontSize="sm"
          color="brand.100"
          name="Chinedu Okpala"
          src="https://avatars.githubusercontent.com/u/36667083?s=40&v=4"
        />

        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  );
};
export default Navbar;
