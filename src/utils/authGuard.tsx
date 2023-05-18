// AuthGuard.tsx
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useStore } from '@/models/root-store';

export const AuthGuard = observer(({ children }: { children: JSX.Element }) => {
  const {
    customerStore: { isLoggedIn, isLoading },
  } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/signin');
    }
  }, [router, isLoggedIn, isLoading]);

  if (!isLoggedIn) return null;

  return <>{children}</>;
});
