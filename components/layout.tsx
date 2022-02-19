import React from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

import styles from "./layout.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: blue[500],
    },
  },
});

import { NavbarDesktop, NavbarMobileLarge, NavbarMobileSmall } from "./navbar";

type NavbarStyle = "desktop" | "mobileLarge" | "mobileSmall";

export default function Layout({ children, navbarStyle }: { children: React.ReactNode; navbarStyle?: NavbarStyle }) {
  let navbarMap = {
    desktop: <NavbarDesktop />,
    mobileLarge: <NavbarMobileLarge />,
    mobileSmall: <NavbarMobileSmall />,
  };
  let Navbar = navbarStyle ? navbarMap[navbarStyle] : "";
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <meta name="description" content="Scent Reccomendation & Review App for Indie Perfumes" />
        <meta name="og:title" content="Common Scents" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Common Scents</title>
      </Head>
      {Navbar}
      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </ThemeProvider>
  );
}
