/* eslint-disable tailwindcss/no-custom-classname */

import AuthContainer from '@/components/auth/AuthContainer/AuthContainer';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function SignIn() {
  return (
    <Main meta={<Meta title={'Onboarding'} description={'Onboarding'} />}>
      <AuthContainer />
    </Main>
  );
}
