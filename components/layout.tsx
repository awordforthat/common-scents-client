import React, { useState, useEffect } from "react";
import Head from "next/head";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

import { NavbarDesktop, NavbarMobileLarge, NavbarMobileSmall } from "./navbar";

import styles from "./layout.module.scss";

//***** Theme  *****/
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

//***** Global Layout *****/
const HeadComponent = () => (
  <Head>
    <link rel="icon" href="/icon.ico" />
    <meta name="description" content="Scent Reccomendation & Review App for Indie Perfumes" />
    <meta name="og:title" content="Common Scents" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Common Scents</title>
  </Head>
);

//***** Mobile Layout *****/
type NavbarStyle = "mobileLarge" | "mobileSmall";

function MobileLayout({ children, navbarStyle }: { children: React.ReactNode; navbarStyle?: NavbarStyle }) {
  let navbarMap = {
    mobileLarge: <NavbarMobileLarge />,
    mobileSmall: <NavbarMobileSmall />,
  };
  let Navbar = navbarStyle ? navbarMap[navbarStyle] : "";
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      {Navbar}
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

//***** Window Resize Handling  *****/

//debounce on resize so that performance issues aren't caused by
//ppl going bonkers on resizing their windows
const debounce = (fn: Function, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

//make sure to change $layout_breakpoint in global.scss if you change this or stuff will break!!
const LayoutBreakpoint = 800;
//returns correct layout initially and (after a debounce) on every resize event
function ResponsiveResize() {
  const [mobile, setMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < LayoutBreakpoint ? true : false);
    };

    updateMobile(); //not debounced -- initial calc
    window.addEventListener("resize", debounce(updateMobile)); //debounced!
    return () => {
      window.removeEventListener("resize", debounce(updateMobile)); //debounced!
    };
  }, []);

  return typeof mobile !== "undefined" ? (mobile ? MobileLayout : DesktopLayout) : null;
}

//returns the correct component (MobileLayout or Desktop Layout) based on current window size
export default function Layout({ children, navbarStyle }: { children: React.ReactNode; navbarStyle?: NavbarStyle }) {
  let ResponsiveLayout = ResponsiveResize();
  return ResponsiveLayout ? ResponsiveLayout({ children, navbarStyle }) : null;
}
