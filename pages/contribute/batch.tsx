import type { NextPage } from "next";

import Button from "@mui/material/Button";

import Layout from "../../components/layout";

const BatchContribute: NextPage = () => {
  return (
    <Layout navbarStyle="mobileSmall">
      <h1 className="title">Batch Contribution</h1>
      <p className="bodyText">Lots to add? Upload your submissions here.</p>
      <p className="bodyText">
        (Just adding one or two things? See the scent contribution page <a href="/contribute/single">here</a>.)
      </p>
      <h4>Batch Submission</h4>
      <p className="bodyText">
        [guidelines for formatting a spreadsheet submission here. Note: form currently setup for csv only, change if
        other format is accepted]
      </p>
      <form action="none" className="mobileForm">
        <label htmlFor="file-input">Choose a CSV file to upload: </label>
        <input id="file-input" name="file-input" type="file" accept=".csv" />
        <Button variant="contained" type="submit" color="primary" sx={{ width: "fit-content" }}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default BatchContribute;
