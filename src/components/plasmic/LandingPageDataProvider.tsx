import { DataProvider, usePlasmicQueryData } from '@plasmicapp/loader-nextjs';

import { LANDING_PAGE_SELECTOR } from '@/graphql/selectors/landingPage';
import { useStore } from '@/models/root-store';

interface Props {
  children: React.ReactNode;
  className?: string;
  slug: string;
}

export const LandingPageDataProvider: React.FC<Props> = ({
  children,
  className,
  slug,
}) => {
  const store = useStore();
  const { data } = usePlasmicQueryData(`/landing/${slug}`, async () => {
    const { landingPageCms } = await store.api.queryLandingPageCms(
      { filter: { slug: { eq: slug } } },
      LANDING_PAGE_SELECTOR
    );
    return landingPageCms;
  });

  if (!data) {
    return null;
  }

  return (
    <div className={className}>
      <DataProvider name="landing" data={data}>
        {children}
      </DataProvider>
    </div>
  );
};
