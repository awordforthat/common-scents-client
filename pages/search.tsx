import type { NextPage } from "next";

import Layout from "../components/layout";

import styles from "../styles/Search.module.scss";

const Search: NextPage = () => {
  return (
    <Layout navbarStyle="mobileLarge">
      <div className={styles.homepageContainer}>
        <p className="bodyText">
          Welcome to Common Scents, the browsable indie perfume database! [Copy here about what this is and what it
          does]
        </p>
        <input type="text" />
      </div>
    </Layout>
  );
};

export default Search;
