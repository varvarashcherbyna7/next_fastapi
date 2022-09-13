import GalleryGrid from 'components/galleries/GalleryGrid/GalleryGrid';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './_page';

const Project: NextPageWithLayout = () => {
  return <GalleryGrid />;
};

export default Project;

Project.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
