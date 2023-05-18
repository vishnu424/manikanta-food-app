import { observer } from 'mobx-react-lite';

import { Meta } from '@/layouts/Meta';
import { useStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

export const Account: any = observer(() => {
  const {
    customerStore: { customer },
  } = useStore();

  return (
    <Main meta={<Meta title="My Account" description="My Account" />}>
      <div className="h-screen">
        <h1>Account Page</h1>
        <p>First Name: {customer.firstName}</p>
        <p>Last Name: {customer.lastName}</p>
        <p>Email: {customer.email}</p>
        <p>Role: {customer.role}</p>
      </div>
    </Main>
  );
});

Account.requireAuth = true;

export default Account;
