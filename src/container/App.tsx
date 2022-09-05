import 'assets/css/custom.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Router from 'routes';
import customTheme from 'theme';
import { appStore } from 'stores/app';
import ErrorBoundary from './ErrorBoundary';

export const App = () => {
  const { pageTitle } = appStore();

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
