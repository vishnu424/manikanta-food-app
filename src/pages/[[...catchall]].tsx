import type { ComponentRenderData } from '@plasmicapp/loader-nextjs';
import {
  extractPlasmicQueryData,
  PlasmicComponent,
  PlasmicRootProvider,
} from '@plasmicapp/loader-nextjs';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import * as React from 'react';

import {
  CMS_SEO_SELECTOR,
  LANDING_PAGE_SLUGS_SELECTOR,
} from '@/graphql/selectors/cms';
import { Meta } from '@/layouts/Meta';
import type { LandingPageRecordModelType } from '@/models/api';
import { initializeStore } from '@/models/root-store';
import type { CmsSeo } from '@/shared/types';
import { Main } from '@/templates/Main';

import { PLASMIC } from '../utils/plasmic-init';
/* eslint-disable */

/**
 * Use fetchPages() to fetch list of pages that have been created in Plasmic
 */
const store = initializeStore();

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await PLASMIC.fetchPages();
  // must do a call here to dato to get all the slugs for landing pages
  const { allLandingPagesCms } = await store.api.queryAllLandingPagesCms({}, LANDING_PAGE_SLUGS_SELECTOR);
  const slugs = allLandingPagesCms.map((page: LandingPageRecordModelType) => page.slug);

  return {
    paths: [
      ...pages.map((page) => ({
      params: { catchall: page.path.substring(1).split('/') },
    })),
    ...slugs.map((slug: string) => ({
      params: { catchall: ['landing', slug] }
    })),
  ],
    fallback: 'blocking',
  };
};

/**
 * For each page, pre-fetch the data we need to render it
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};

  // Convert the catchall param into a path string
  const plasmicPath =
    typeof catchall === 'string'
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join('/')}`
      : '/';

  const pathSections = plasmicPath.slice(1).split('/');
  const slug = pathSections[pathSections.length - 1];
  const isLandingPage = pathSections[0] === 'landing';

  // Fetching meta data for all plasmic pages
  let seoData: CmsSeo;
  if (isLandingPage) {
    const response = await store.api.queryLandingPageCms({ filter: { slug: { eq: slug } } }, CMS_SEO_SELECTOR);
    seoData = response.landingPageCms;
  } else {
    const filterSlug = slug === '' ? 'home' : slug;
    const response = await store.api.queryGeneralPageCms({ filter: { slug: { eq: filterSlug } } }, CMS_SEO_SELECTOR);
    seoData = response.generalPageCms;
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    // This is some non-Plasmic catch-all page
    return {
      props: {},
    };
  }

  // This is a path that Plasmic knows about.
  const pageMeta = plasmicData.entryCompMetas[0] || {
    params: {},
    displayName: '',
  };

  // Cache the necessary data fetched for the page.
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageParams={pageMeta?.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );

  // Pass the data in as props.
  return {
    props: { plasmicData, queryCache, seoData },

    // Using incremental static regeneration, will invalidate this page
    // after 300s (no deploy webhooks needed)
    revalidate: 300,
  };
};

/**
 * Actually render the page!
 */
export default function CatchallPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
  seoData?: CmsSeo;
}) {
  const { plasmicData, queryCache, seoData } = props;
  const seoTitle = seoData?.seoTitle || '';
  const seoDescription = seoData?.seoDescription || '';
  const ogImage = seoData?.ogImage?.url || '';

  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  // This is a path that Plasmic knows about.
  const pageMeta = plasmicData.entryCompMetas[0] || {
    params: {},
    displayName: '',
  };

  return (
    // Pass in the data fetched in getStaticProps as prefetchedData
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <Main meta={<Meta title={seoTitle} description={seoDescription} canonical={ogImage}  />}>
          <PlasmicComponent component={pageMeta.displayName} />
      </Main>
    </PlasmicRootProvider>
  );
}
