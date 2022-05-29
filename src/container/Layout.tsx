import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const color = useColorModeValue('white', '#0d1117');

  return (
    <Box fontFamily="inherit" bg={color} minH="100vh">
      <Navbar />
      <Container mt={16} pb={5} as="main" minW={{ lg: 'xl', '2xl': '6xl' }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
