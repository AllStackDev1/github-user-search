import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import useApp from 'context/app';
import Router from 'routes';
import customTheme from 'theme';
import ErrorBoundary from './ErrorBoundary';

export const App = () => {
  const { pageTitle } = useApp();

  return (
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary>
        <HelmetProvider>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};
