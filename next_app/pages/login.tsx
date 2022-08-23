import RegisterLogin from '../components/forms/RegisterLogin/RegisterLogin';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <RegisterLogin />
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
