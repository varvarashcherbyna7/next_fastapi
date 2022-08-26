import Error from 'components/info/Error/Error';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../page';

const ErrorPage: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <Error />
      </div>
    </div>
  );
};

export default ErrorPage;

ErrorPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
