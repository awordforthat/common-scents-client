import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Layout } from '../components/layout';

import styles from './styles/Home.module.scss';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? 'noServerUrlProvided';
const Home: NextPage = () => {
  // useEffect(() => {
  //   fetch(new URL(`${serverUrl}/scents`).toString(), {
  //     headers: { 'Access-Control-Allow-Origin': '*' },
  //   })
  //     .then(async (res) => {
  //       const result = await res.json();
  //       if (Object.keys(result).includes('error')) {
  //         setError(error);
  //         return;
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [error]);

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Common Scents!</h1>

        <p className={styles.description}>This is a work in progress.</p>
      </main>
      <footer className={styles.footer}>
        <div>Footer goes here</div>
      </footer>
    </Layout>
  );
};

export default Home;
