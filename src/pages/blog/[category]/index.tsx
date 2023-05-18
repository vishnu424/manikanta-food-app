import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
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
  selectedCategory: BlogCategoryRecordModelType;
  articleCount: number;
};

const BlogArticlesCategoryIndex: NextPage<BlogArticlesIndexProps> = ({
  highlightedArticles,
  articles,
  categories,
  selectedCategory,
  articleCount,
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
        filter: {
          id: {
            notIn: highlightedArticleIds,
          },
          ...(selectedCategory && {
            category: {
              eq: selectedCategory.id,
            },
          }),
        },
      },
      BLOG_ARTICLES_CARD_SELECTOR
    );
    if (data.allBlogArticlesCms.length === 0) return;
    setExtraArticles((prev) => prev.concat(data.allBlogArticlesCms));
  };

  const shownArticles = [...articles, ...extraArticles];
  const { seoTitle, seoDescription, ogImage } = selectedCategory;

  return (
    <Main
      meta={
        <Meta
          title={seoTitle || 'Blog Articles'}
          description={seoDescription || 'Blog Articles'}
          canonical={ogImage?.url}
        />
      }
    >
      <BlogCategories
        categories={categories}
        selectedCategory={selectedCategory}
      />
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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { category } = context.params!;
  const store = initializeStore(null, true);

  const {
    allBlogCategoriesCms,
  }: { allBlogCategoriesCms: BlogCategoryRecordModelType[] } =
    await store.api.queryAllBlogCategoriesCms({}, BLOG_CATEGORY_SELECTOR);

  const selectedCategory = allBlogCategoriesCms.find(
    (categoryCms) => categoryCms.name === category
  );

  const highlightedArticleIds: string[] =
    selectedCategory?.highlightedArticles?.map(
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
          ...(selectedCategory && {
            category: {
              eq: selectedCategory.id,
            },
          }),
        },
      },
      BLOG_ARTICLES_CARD_SELECTOR
    );

  const {
    _allBlogArticlesMetaCms: { count },
  }: { _allBlogArticlesMetaCms: CollectionMetadataModelType } =
    await store.api.query_allBlogArticlesMetaCms(
      {
        filter: {
          ...(selectedCategory && {
            category: {
              eq: selectedCategory.id,
            },
          }),
        },
      },
      'count'
    );

  const articleCount = count as number;

  return {
    props: {
      highlightedArticles: selectedCategory?.highlightedArticles || [],
      articles: allBlogArticlesCms,
      categories: allBlogCategoriesCms,
      selectedCategory,
      articleCount,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const store = initializeStore(null, true);

  const {
    allBlogCategoriesCms,
  }: { allBlogCategoriesCms: BlogCategoryRecordModelType[] } =
    await store.api.queryAllBlogCategoriesCms({}, 'name');

  const paths = allBlogCategoriesCms.map((category) => {
    return {
      params: {
        category: category.name as string,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default BlogArticlesCategoryIndex;
