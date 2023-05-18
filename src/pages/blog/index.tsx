import * as _ from 'lodash';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

import BlogArticlesList from '@/components/blog/BlogArticlesList/BlogArticlesList';
import BlogCategories from '@/components/blog/BlogCategories/BlogCategories';
import {
  BLOG_ARTICLES_CARD_SELECTOR,
  BLOG_CATEGORY_SELECTOR,
} from '@/graphql/selectors/blogArticle';
import { Meta } from '@/layouts/Meta';
import type {
  BlogArticleRecordModelType,
  BlogCategoryRecordModelType,
  CollectionMetadataModelType,
} from '@/models/api';
import { initializeStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

type BlogArticlesIndexProps = {
  highlightedArticles: BlogArticleRecordModelType[];
  articles: BlogArticleRecordModelType[];
  categories: BlogCategoryRecordModelType[];
  articleCount: number;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
};

const BlogArticlesIndex: NextPage<BlogArticlesIndexProps> = ({
  highlightedArticles,
  articles,
  categories,
  articleCount,
  seoTitle,
  seoDescription,
  ogImage,
}: BlogArticlesIndexProps) => {
  const store = initializeStore(null, true);
  const [extraArticles, setExtraArticles] = useState<
    BlogArticleRecordModelType[]
  >([]);
  const highlightedArticleIds = highlightedArticles.map(
    (article) => article.id
  );
  const loadMoreArticles = async () => {
    const data = await store.api.queryAllBlogArticlesCms(
      {
        first: 9,
        skip: articles.length + extraArticles.length,
        orderBy: '_publishedAt_DESC',
        filter: {
          id: {
            notIn: highlightedArticleIds,
          },
        },
      },
      BLOG_ARTICLES_CARD_SELECTOR
    );
    if (data.allBlogArticlesCms.length === 0) return;
    setExtraArticles((prev) => prev.concat(data.allBlogArticlesCms));
  };

  const shownArticles = [...articles, ...extraArticles];

  return (
    <Main
      meta={
        <Meta
          title={seoTitle || 'Blog Articles'}
          description={seoDescription || 'Blog Articles'}
          canonical={ogImage}
        />
      }
    >
      <BlogCategories categories={categories} />
      <div className="p-4 sm:p-8">
        <BlogArticlesList
          highlightedArticles={highlightedArticles}
          articles={shownArticles}
          articleCount={articleCount}
          loadMoreArticles={loadMoreArticles}
        />
      </div>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initializeStore(null, true);

  const {
    allBlogCategoriesCms,
  }: { allBlogCategoriesCms: BlogCategoryRecordModelType[] } =
    await store.api.queryAllBlogCategoriesCms({}, BLOG_CATEGORY_SELECTOR);

  const allCategory = _.find(
    allBlogCategoriesCms,
    (categoryData) => categoryData.name === 'all'
  );

  const highlightedArticleIds: string[] =
    allCategory?.highlightedArticles?.map(
      (article: BlogArticleRecordModelType) => article.id
    ) || [];

  const {
    allBlogArticlesCms,
  }: { allBlogArticlesCms: BlogArticleRecordModelType[] } =
    await store.api.queryAllBlogArticlesCms(
      {
        first: 6,
        orderBy: '_publishedAt_DESC',
        filter: {
          id: {
            notIn: highlightedArticleIds,
          },
        },
      },
      BLOG_ARTICLES_CARD_SELECTOR
    );

  const {
    _allBlogArticlesMetaCms: { count },
  }: { _allBlogArticlesMetaCms: CollectionMetadataModelType } =
    await store.api.query_allBlogArticlesMetaCms({}, 'count');

  const articleCount = count as number;

  return {
    props: {
      highlightedArticles: allCategory?.highlightedArticles || [],
      articles: allBlogArticlesCms,
      categories: allBlogCategoriesCms,
      articleCount,
      seoTitle: allCategory?.seoTitle,
      seoDescription: allCategory?.seoDescription,
      ogImage: allCategory?.ogImage?.url,
    },
  };
};

export default BlogArticlesIndex;
