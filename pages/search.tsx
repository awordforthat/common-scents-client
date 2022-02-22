import { useState } from 'react';
import type { NextPage } from 'next';

import { Drawer, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Layout, HeadComponent, theme } from '../components/layout';
import useIsMobile from '../components/hooks/useIsMobile';
import { NavbarDesktop } from '../components/navbar';

import styles from './styles/search.module.scss';

//***** Filter Button *****/
const FilterButton = (props: { isFilterOpen: boolean; changeFilterVis: Function }) => {
  return props.isFilterOpen ? (
    <button
      style={{
        animation: `${props.isFilterOpen ? styles.buttonIn : styles.buttonOut} 225ms cubic-bezier(0, 0, 0.2, 1) 0ms`,
      }} //matching the MUI animation
      aria-label="toggle filter menu"
      onClick={() => props.changeFilterVis()}
      className={styles.filterButtonSidePanel}
      tabIndex={0}
    >
      Filter
    </button>
  ) : (
    <button aria-label="toggle filter menu" onClick={() => props.changeFilterVis()} className={styles.filterButton}>
      Filter
    </button>
  );
};

//***** Filter Containers *****/
const FilterPanelMobile = (props: { isFilterOpen: boolean; onClose: () => void; changeFilterVis: Function }) => {
  return (
    <>
      <FilterButton isFilterOpen={props.isFilterOpen} changeFilterVis={props.changeFilterVis} />

      <Drawer
        open={props.isFilterOpen}
        anchor="left"
        onClose={props.onClose}
        sx={{ width: '280px' }}
        disableEnforceFocus //so the FilterButton can still be focusable
      >
        <FilterItems />
      </Drawer>
    </>
  );
};

const FilterPanelDesktop = () => {
  return (
    <div className={styles.desktopFilterPanel}>
      <FilterItems />
    </div>
  );
};

//***** Filter Content  *****//
const FilterItem = (props: { text: string; sx?: Object }) => <Button sx={props.sx}>{props.text}</Button>;

const FilterItems = (props: { sx?: Object }) => {
  return (
    <div className={styles.filterContainer}>
      <FilterItem text="House" sx={props.sx} />
      <FilterItem text="Category" sx={props.sx} />
      <FilterItem text="Notes" sx={props.sx} />
      <FilterItem text="Size" sx={props.sx} />
    </div>
  );
};

//***** Search Field and Results  *****//
const MainBody = () => {
  return (
    <div className={styles.mainContentContainer}>
      <p className="bodyText">
        Welcome to Common Scents, the browsable indie perfume database! [Copy here about what this is and what it does]
      </p>
      <input type="text" />
    </div>
  );
};

//***** Full Page  *****//
const Search: NextPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return useIsMobile() ? (
    <Layout>
      <MainBody />
      <FilterPanelMobile
        isFilterOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        changeFilterVis={() => setIsFilterOpen(!isFilterOpen)}
      />
    </Layout>
  ) : (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <NavbarDesktop />
      <main className={styles.desktopContainer}>
        <FilterPanelDesktop />
        <MainBody />
      </main>
    </ThemeProvider>
  );
};

export default Search;
