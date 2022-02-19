import type { NextPage } from "next";

import Layout from "../components/layout";

const Search: NextPage = () => {
  return (
    <Layout navbarStyle="mobileLarge">
      <p className="bodyText">
        Welcome to Common Scents, the browsable indie perfume database! [Copy here about what this is and what it does]
      </p>
      <input type="text" />
    </Layout>
  );
};

export default Search;
