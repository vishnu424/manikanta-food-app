import '../styles/global.css';

import type { NextComponentType } from 'next'; // Import Component type
import type { AppProps } from 'next/app';

import { StoreContext } from '@/models/reactUtils';
import { useStore } from '@/models/root-store';
import { AuthGuard } from '@/utils/authGuard';

// Add requireAuth to the component type
type CustomAppProps = AppProps & {
  Component: NextComponentType & { requireAuth?: boolean }; // add auth type
};

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  // @ts-ignore
  const store = useStore(pageProps.initialState);
  return (
    <StoreContext.Provider value={store}>
      {Component.requireAuth ? (
        // protected pages
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        // public page
        <Component {...pageProps} />
      )}
    </StoreContext.Provider>
  );
};

export default MyApp;
