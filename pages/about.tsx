import type { NextPage } from "next";

import Layout from "../components/layout";

const About: NextPage = () => {
  return (
    <Layout navbarStyle="mobileSmall">
      <div className="mobilePageContainer">
        <h1 className="title">About</h1>
        <p className="bodyText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid minus eaque commodi doloremque numquam
          excepturi ducimus tempore nulla ut voluptatibus necessitatibus, dolorum quis iusto asperiores in ad illo
          voluptates nostrum.
        </p>
        <p className="bodyText">[Info about contributing]</p>
        <p className="bodyText">[Info about IMAM]</p>
        <p className="bodyText">[Contact Info]</p>
      </div>
    </Layout>
  );
};

export default About;
