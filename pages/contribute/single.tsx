import type { NextPage } from 'next';

import Button from '@mui/material/Button';

import { Layout } from '../../components/layout';

const Single: NextPage = () => {
  return (
    <Layout>
      <h1 className="title">Single Scent Contribution</h1>
      <p className="bodyText">Something missing? Submit an addition here!</p>
      <p className="bodyText">
        (Adding a bunch of stuff? See the batch submission page <a href="/contribute/batch">here</a>.)
      </p>
      <form action="none" className="mobileForm">
        <Button variant="contained" type="submit" color="primary" sx={{ width: 'fit-content' }}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Single;
