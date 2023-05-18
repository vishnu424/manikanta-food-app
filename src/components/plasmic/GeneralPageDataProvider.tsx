import { DataProvider, usePlasmicQueryData } from '@plasmicapp/loader-nextjs';

import { GENERAL_PAGE_SELECTOR } from '@/graphql/selectors/generalPage';
import { useStore } from '@/models/root-store';

interface Props {
  children: React.ReactNode;
  className?: string;
  slug: string;
}

export const GeneralPageDataProvider: React.FC<Props> = ({
  children,
  className,
  slug,
}) => {
  const store = useStore();
  const { data } = usePlasmicQueryData(`/${slug}`, async () => {
    const { generalPageCms } = await store.api.queryGeneralPageCms(
      {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
      GENERAL_PAGE_SELECTOR
    );
    return generalPageCms;
  });

  if (!data) {
    return null;
  }

  return (
    <div className={className}>
      <DataProvider name="general" data={data}>
        {children}
      </DataProvider>
    </div>
  );
};
