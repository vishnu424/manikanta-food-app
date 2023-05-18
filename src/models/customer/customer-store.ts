import { CustomerModel } from './customer';
import randomise from "randomatic";
import { CUSTOMER_BASIC_INFO_SELECTOR, AUTH_SELECTOR } from '@/graphql/selectors/auth';
import { flow, types } from 'mobx-state-tree';
import { withRootStore } from '@/models/helpers/with-root-store';
import { AuthRole } from '../api';

const ANON_USER = {
  _id: `ANON-${randomise('0', 13)}`,
  role: AuthRole.ANONYMOUS,
  firstName: '',
  lastName: '',
  email: '',
};

export const CustomerStoreModel = types
  .model('CustomerStore')
  .props({
    isLoading: types.optional(types.boolean, false),
    customer: types.optional(
      types.late(() => CustomerModel),
      ANON_USER
    ),
  })
	.extend(withRootStore)
  .views((self) => ({
    get isLoggedIn() {
      return self.customer.role === AuthRole.CUSTOMER;
    },
    get isGuest() {
      return self.customer.role === AuthRole.GUEST;
    },
    get isAnon() {
      return self.customer.role === AuthRole.ANONYMOUS;
    },
  }))
  .actions((self) => ({
    setCustomer(customer: any) {
      self.customer = CustomerModel.create(customer);
    },
  }))
  .actions((self) => ({
    getCustomerInfo: flow(function* () {
      try {
        const { customerInfo } = yield self.rootStore.api.queryCustomerInfo(
          {},
          CUSTOMER_BASIC_INFO_SELECTOR,
				).promise;
        self.setCustomer(customerInfo);
      } catch (error) {
				console.log(error);
			}
    }),
    loginGuest: flow(function* () {
      try {
        const { loginGuest } = yield self.rootStore.api.mutateLoginGuest(
          {},
          AUTH_SELECTOR,
        ).promise;
        self.setCustomer(loginGuest.customerInfo);
      } catch (error) {
        console.log(error);
      }
    }),
    loginEmailPass: flow(function* (email: string, password: string) {
      try {
        console.log({ email, password });
        const { login } = yield self.rootStore.api.mutateLogin(
          { input: { email, password }},
          AUTH_SELECTOR,
        ).promise;
        self.setCustomer(login.customerInfo);
      } catch (error) {
        console.log(error);
      }
    }),
  }))
  .actions((self) => ({
    loadCustomer: flow(function* () {
      try {
        self.isLoading = true;
        yield self.getCustomerInfo();
        if (self.isAnon) {
          yield self.loginGuest();
        }
        self.isLoading = false;
      } catch (error) {
				console.log(error);
			}
    }),
    logout: flow(function* () {
      try {
        yield self.rootStore.api.mutateLogout().promise;
        yield self.loginGuest();
      } catch (error) {
        console.log(error);
      }
    }),
  }));
