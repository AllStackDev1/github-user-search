import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
  sm: '40rem', // 640px
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '85.375em', // 1366
  '3xl': '90em', // 1440
  '4xl': '96em', // 1536
  '5xl': '108rem', // 1728
  '6xl': '120em', // 1920
});

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  cssVarPrefix: 'github',
};

const styles = {
  global: () => ({
    body: {
      bg: '#0d1117',
      fontSize: 'sm',
    },
  }),
};

const colors = {
  ...chakraTheme.colors,
  brand: {
    100: '#161b22',
    200: '#f6f8fa',
    white: {
      50: 'rgba(255,255,255, 0.25)',
      100: 'rgba(255,255,255, 0.5)',
    },
  },
};

const overrides = {
  styles,
  fonts,
  colors,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  config,
};

const customTheme = extendTheme(overrides);

export default customTheme;
