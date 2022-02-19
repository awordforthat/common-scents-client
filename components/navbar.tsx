import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import smallLogo from "../public/circle-icon.svg";
import bigLogo from "../public/biglogo.svg";

import styles from "./navbar.module.scss";

const SideNavItems = () => {
  return (
    <>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Contribute a Scent" />
      </ListItem>

      <ListItem button>
        <Link href="/batchContribute">
          <a>Batch Contribute</a>
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemText primary="All Houses" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </>
  );
};

const SideNavPanel = (props: { isDrawerOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer open={props.isDrawerOpen} anchor="right" onClose={props.onClose}>
      <List>
        <SideNavItems />
      </List>
    </Drawer>
  );
};

export const NavbarMobileSmall = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar variant="outlined" position="static">
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
    <AppBar variant="outlined" position="static" className={styles.appBarMobile}>
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
    <AppBar variant="outlined" position="static" className={styles.appBarDesktop}>
      <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div className={styles.logoContainerDesktop}>
          <Image src={bigLogo} layout="intrinsic" height="67px" alt="" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
