import { Box, HStack, Text, Link, Image } from '@chakra-ui/react';

import { Link as ReachRouter } from 'react-router-dom';

import Logo32 from 'assets/images/GitHub-Mark-Light-32px.png';

const Footer = () => {
  const menus = [
    {
      link: '/terms',
      name: 'Terms',
    },
    {
      link: '/privacy',
      name: 'Privacy',
    },
    {
      link: '/security',
      name: 'Security',
    },
    {
      link: '/status',
      name: 'Status',
    },
    {
      link: '/docs',
      name: 'Docs',
    },
    {
      link: '/contact-gitHub',
      name: 'Contact GitHub',
    },
    {
      link: '/pricing',
      name: 'Pricing',
    },
    {
      link: '/api',
      name: 'API',
    },
    {
      link: '/training',
      name: 'Training',
    },
    {
      link: '/blog',
      name: 'Blog',
    },
    {
      link: '/about',
      name: 'About',
    },
  ];

  return (
    <Box as="footer" pt={10} borderTopWidth={1}>
      <HStack spacing={4} fontSize="xs">
        <HStack>
          <Link as={ReachRouter} to="/">
            <Image src={Logo32} alt="logo" w={6} h={6} />
          </Link>
          <Text color="brand.white.100">
            @ {new Date().getFullYear()} GitHub, Inc.
          </Text>
        </HStack>
        {menus.map((m) => (
          <Link
            to={m.link}
            key={m.link}
            as={ReachRouter}
            fontWeight={600}
            color="blue.300"
          >
            {m.name}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;