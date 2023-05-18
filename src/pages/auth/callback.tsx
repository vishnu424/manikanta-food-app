// import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AUTH_SELECTOR } from '@/graphql/selectors/auth';
import { Meta } from '@/layouts/Meta';
import type { RootStoreType } from '@/models/api';
import { useStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

export default function Callback() {
  const router = useRouter();
  const { code, usid, verifier } = router.query;

  const store = useStore();
  useEffect(() => {
    const codeValue = Array.isArray(code) ? code[0] : code;
    const usidValue = Array.isArray(usid) ? usid[0] : usid;
    const verifierValue = Array.isArray(verifier) ? verifier[0] : verifier;

    if (codeValue && usidValue && verifierValue) {
      const getAuthDetails = async () => {
        const payload = {
          code: codeValue,
          usid: usidValue,
          verifier: verifierValue,
        };
        const { authCallback } = await (
          store.api as RootStoreType
        ).mutateAuthCallback(
          {
            input: payload,
          },
          AUTH_SELECTOR
        );
        store.customerStore.setCustomer(authCallback.customerInfo);
        router.push('/account');
      };
      getAuthDetails();
    }
  }, [code, usid, verifier]);

  return (
    <Main meta={<Meta title="Login callback" description="Login callback" />}>
      <div className="flex h-screen items-center justify-center">
        <p>{'loading'}</p>
      </div>
    </Main>
  );
}
