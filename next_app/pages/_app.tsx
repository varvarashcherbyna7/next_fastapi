import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import { Provider } from 'react-redux';
import { setupStore } from './api/redux/store/store';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const store = setupStore();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
