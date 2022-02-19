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

const SideNavPanel = (props: { isDrawerOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer open={props.isDrawerOpen} anchor="right" onClose={props.onClose}>
      <List>
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
      </List>
    </Drawer>
  );
};

export const NavbarMobileSmall = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar variant="outlined" position="static">
      <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Image src="/circle-icon.png" width={50} height={50} alt="" />
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
    <AppBar variant="outlined" position="static" sx={{ height: "20px" }}>
      <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Image src="/circle-icon.png" width={50} height={50} alt="" />
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <SideNavPanel isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </Toolbar>
    </AppBar>
  );
};

export const NavbarDesktop = () => {
  return (
    <>
      <div>Desktop</div>
    </>
  );
};
