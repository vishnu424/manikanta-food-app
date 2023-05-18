import { Provider } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import Register from '@/components/weight-loss/index';
import { Meta } from '@/layouts/Meta';
import wlpJson from '@/mock-data/wlp.json';
import { useStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

type RegisterProps = {
  wlpData: any;
  meals: any;
};

const RegisterMain: React.FC<RegisterProps> = ({ wlpData, meals }) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    wlp.setInitialContent(wlpData);
    wlp.setInitialactiveLevels(wlpData.activeLevels);
    setIsLoaded(true);
  }, []);

  return (
    <Provider>
      <Main
        meta={
          <Meta title="Weight Loss Program" description="Weight Loss Program" />
        }
      >
        {isLoaded && <Register mealsData={meals} />}
        {!isLoaded && <div className="h-screen w-full"></div>}
      </Main>
    </Provider>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BACKEND_API}/mealplan/wlp?gender=male&weight=80&type=wlp-lite&activeLevels=1,1,1,1,1,1,1)`
  );
  const meals = await res.json();
  // fetch wlp json from api
  const wlpData = wlpJson;
  return {
    props: {
      wlpData,
      meals,
    },
  };
}

export default RegisterMain;
