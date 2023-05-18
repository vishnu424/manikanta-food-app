import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import BlogArticleHeader from '@/components/blog/BlogArticleHeader/BlogArticleHeader';
import BlogRelatedArticles from '@/components/blog/BlogRelatedArticles/BlogRelatedArticles';
import BlogStructuredText from '@/components/blog/BlogStructuredText/BlogStructuredText';
import {
  BLOG_ARTICLE_SELECTOR,
  BLOG_ARTICLES_CARD_SELECTOR,
} from '@/graphql/selectors/blogArticle';
import { Meta } from '@/layouts/Meta';
import type { BlogArticleRecordModelType } from '@/models/api';
import { initializeStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

type BlogArticleProps = {
  article: BlogArticleRecordModelType;
  relatedArticles: BlogArticleRecordModelType[];
};

const BlogArticle: NextPage<BlogArticleProps> = ({
  article,
  relatedArticles,
}: BlogArticleProps) => {
  const { content, seoTitle, seoDescription, ogImage } = article;

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
      <div className="p-4 sm:p-8">
        <BlogArticleHeader article={article} />
        <BlogStructuredText content={content} />
        <BlogRelatedArticles articles={relatedArticles} />
      </div>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context.params!;
  const store = initializeStore(null, true);

  const { blogArticleCms }: { blogArticleCms: BlogArticleRecordModelType } =
    await store.api.queryBlogArticleCms(
      {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
      BLOG_ARTICLE_SELECTOR
    );

  const {
    allBlogArticlesCms,
  }: { allBlogArticlesCms: BlogArticleRecordModelType[] } =
    await store.api.queryAllBlogArticlesCms(
      {
        first: 3,
        orderBy: '_publishedAt_DESC',
        filter: {
          slug: {
            neq: slug,
          },
          category: {
            eq: blogArticleCms.category.id,
          },
        },
      },
      BLOG_ARTICLES_CARD_SELECTOR
    );

  return {
    props: {
      article: blogArticleCms,
      relatedArticles: allBlogArticlesCms,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const store = initializeStore(null, true);

  const {
    allBlogArticlesCms,
  }: { allBlogArticlesCms: BlogArticleRecordModelType[] } =
    await store.api.queryAllBlogArticlesCms({}, BLOG_ARTICLES_CARD_SELECTOR);

  const paths = allBlogArticlesCms.map((article) => {
    return {
      params: {
        slug: article.slug as string,
        category: article.category.name as string,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default BlogArticle;
