import { observer } from 'mobx-react-lite';
import React from 'react';

import Button from '@/components/common/Button/Button';
import type { BlogArticleRecordModelType } from '@/models/api';

import BlogArticleCard from '../BlogArticleCard/BlogArticleCard';
import BlogHeroArticle from '../BlogHeroArticle/BlogHeroArticle';

interface BlogArticlesListProps {
  highlightedArticles: BlogArticleRecordModelType[];
  articles: BlogArticleRecordModelType[];
  articleCount: number;
  loadMoreArticles: () => void;
}

const BlogArticlesList: React.FC<BlogArticlesListProps> = observer(
  ({
    highlightedArticles,
    articles,
    articleCount,
    loadMoreArticles,
  }: BlogArticlesListProps) => {
    if (!articles || articles.length === 0) return null;
    const firstArticle = highlightedArticles[0];
    if (!firstArticle) return null;
    const showGrid = articles.length > 1 || highlightedArticles.length > 1;
    return (
      <>
        <BlogHeroArticle article={firstArticle} />
        {showGrid && (
          <div className="my-8 border-t border-grey-dark pt-8">
            <h2 className="mb-8 font-jekoBold text-grey-dark">
              Latest Articles
            </h2>
            {highlightedArticles.length > 1 && (
              <div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2">
                {highlightedArticles.slice(1, 3).map((article) => (
                  <BlogArticleCard
                    key={article.slug}
                    article={article}
                    size={'large'}
                  />
                ))}
              </div>
            )}
            {articles.length > 1 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <BlogArticleCard
                    key={article.slug}
                    article={article}
                    size={'small'}
                    showSummary
                  />
                ))}
              </div>
            )}
            {articles.length + highlightedArticles.length < articleCount && (
              <div className="my-8 flex justify-center">
                <Button theme="secondary" onClick={loadMoreArticles}>
                  View More
                </Button>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default BlogArticlesList;
