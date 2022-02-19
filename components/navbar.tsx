import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import smallLogo from "../public/circle-icon.svg";
import bigLogo from "../public/biglogo.svg";

import styles from "./navbar.module.scss";

//***** Sidebar (Mobile Only) *****/
const SideNavPanel = (props: { isDrawerOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer open={props.isDrawerOpen} anchor="right" onClose={props.onClose}>
      <List>
        <NavItems />
      </List>
    </Drawer>
  );
};

//***** Navbar Links  *****/
const NavItem = (props: { href: string; linkText: string; sx?: Object }) => (
  <ListItemButton sx={props.sx}>
    <Link href={props.href}>
      <a>{props.linkText}</a>
    </Link>
  </ListItemButton>
);

const NavItems = (props: { sx?: Object }) => {
  return (
    <>
      <NavItem href="/search" linkText="Home" sx={props.sx} />
      <NavItem href="/about" linkText="About" sx={props.sx} />
      <NavItem href="/houses" linkText="All Houses" sx={props.sx} />
      <NavItem href="/contribute/single" linkText="Contribute a Scent" sx={props.sx} />
      <NavItem href="/contribute/batch" linkText="Batch Contribute" sx={props.sx} />
      <NavItem href="/contact" linkText="Contact" sx={props.sx} />
    </>
  );
};

//***** Navbars  *****/
export const NavbarMobileSmall = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Image src={smallLogo} width={50} height={50} alt="" />
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <SideNavPanel isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </Toolbar>
    </AppBar>
  );
};

export const NavbarMobileLarge = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar position="static" className={styles.appBarMobile}>
      <Toolbar sx={{ display: "block", height: "200px" }}>
        <div className={styles.logoContainerMobile}>
          <Image src={bigLogo} alt="" height="93px" width="300px" layout="intrinsic" />
        </div>
        <IconButton
          edge="start"
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideNavPanel isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </Toolbar>
    </AppBar>
  );
};

export const NavbarDesktop = () => {
  return (
    <AppBar position="static" className={styles.appBarDesktop}>
      <Toolbar className={styles.toolBarDesktop}>
        <div className={styles.logoContainerDesktop}>
          <Image src={bigLogo} layout="fixed" height="67px" alt="" />
        </div>
        <List sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "0px" }}>
          <NavItems sx={{ color: "white", fontSize: "1.2rem", textAlign: "center", fontWeight: "600" }} />
        </List>
      </Toolbar>
    </AppBar>
  );
};
