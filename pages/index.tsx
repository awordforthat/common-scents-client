import type { NextPage } from 'next';

import { Layout } from '../components/layout';

import styles from './styles/home.module.scss';

const Home: NextPage = () => {
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
