import Card from '../components/cards/card/Card';
import { mockCardProps } from '../components/cards/card/Card.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <Card {...mockCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    // <>
    //   <SidebarLayout />
    //   {page}
    // </>
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
