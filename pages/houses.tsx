import type { NextPage } from 'next';

import { IHouse } from '../types/core';

import { Layout } from '../components/layout';

import styles from '../styles/page.module.scss';
import housesStyles from './styles/houses.module.scss';

export async function getStaticProps() {
  let houses: IHouse[] = [];
  await fetch(new URL('/houses', process.env['SERVER_URL']).toString(), {
    method: 'GET',
  }).then(async (res) => {
    houses = await res.json();
  });

  return {
    props: { houses }, // will be passed to the page component as props
  };
}

interface IHousesProps {
  houses: IHouse[];
}
const AllHouses: NextPage<IHousesProps> = ({ houses }) => {
  return (
    <Layout>
      <h1 className={styles.sectionHeader}>All Houses</h1>
      <section>
        <ul>
          {houses.map((house: IHouse) => {
            return (
              <li className={housesStyles.houseTile} key={house.slug}>
                {house.name}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default AllHouses;
