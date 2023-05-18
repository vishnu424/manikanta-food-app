import type { ReactNode } from 'react';

import Footer from '@/components/common/Footer/Footer';
import Nav from '@/components/common/Nav/Nav';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="bg-gray-100">
    <div className="m-auto w-full max-w-screen-2xl bg-white antialiased">
      {props.meta}
      <Nav />
      <div className="w-full">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
