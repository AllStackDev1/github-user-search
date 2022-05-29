import 'assets/css/custom.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import useApp from 'context/app';
import Router from 'routes';
import customTheme from 'theme';
import ErrorBoundary from './ErrorBoundary';

const queryClient = new QueryClient();

export const App = () => {
  const { pageTitle } = useApp();

  return (
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <Helmet>
              <title>{pageTitle}</title>
            </Helmet>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};
