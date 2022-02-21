import { useState } from "react";
import type { NextPage } from "next";

import { Drawer, Button } from "@mui/material";

import { Layout } from "../components/layout";

import styles from "../styles/Search.module.scss";

//***** Filter Container & Button *****/
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

const FilterPanel = (props: { isFilterOpen: boolean; onClose: () => void; changeFilterVis: Function }) => {
  return (
    <>
      <FilterButton isFilterOpen={props.isFilterOpen} changeFilterVis={props.changeFilterVis} />

      <Drawer
        open={props.isFilterOpen}
        anchor="left"
        onClose={props.onClose}
        sx={{ width: "280px" }}
        disableEnforceFocus //so the FilterButton can still be focusable
      >
        <FilterItems />
      </Drawer>
    </>
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

//***** Full Page  *****//
const Search: NextPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <Layout>
      <div className={styles.homepageContainer}>
        <p className="bodyText">
          Welcome to Common Scents, the browsable indie perfume database! [Copy here about what this is and what it
          does]
        </p>
        <input type="text" />
      </div>
      <FilterPanel
        isFilterOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        changeFilterVis={() => setIsFilterOpen(!isFilterOpen)}
      />
    </Layout>
  );
};

export default Search;
