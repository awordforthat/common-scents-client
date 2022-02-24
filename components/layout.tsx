import React from 'react';
import Head from 'next/head';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

import { NavbarDesktop, NavbarMobileSmall } from './navbar';
import useIsMobile from './hooks/useIsMobile';
import styles from './styles/layout.module.scss';

//***** Theme  *****/
export const theme = createTheme({
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: blue[500],
    },
  },
});

//***** Global Layout *****/
export const HeadComponent = () => (
  <Head>
    <link rel="icon" href="/icon.ico" />
    <meta name="description" content="Scent Reccomendation & Review App for Indie Perfumes" />
    <meta name="og:title" content="Common Scents" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Common Scents</title>
  </Head>
);

//***** Mobile Layout *****/
function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <NavbarMobileSmall />
      <main className={styles.mobilePageContainer}>{children}</main>
    </ThemeProvider>
  );
}

//***** Desktop Layout  *****/
function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <NavbarDesktop />
      <main className={styles.desktopPageContainer}>{children}</main>
    </ThemeProvider>
  );
}

//returns the correct component (MobileLayout or Desktop Layout) based on current window size
export function Layout({ children }: { children: React.ReactNode }) {
  return useIsMobile() ? MobileLayout({ children }) : DesktopLayout({ children });
}
