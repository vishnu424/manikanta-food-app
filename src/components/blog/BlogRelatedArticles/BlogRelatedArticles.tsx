import React from 'react';

import BlogRelatedArticle from '@/components/blog/BlogRelatedArticle/BlogRelatedArticle';
import type { BlogArticleRecordModelType } from '@/models/api';

interface BlogRelatedArticlesProps {
  articles: BlogArticleRecordModelType[];
}

const BlogRelatedArticles: React.FC<BlogRelatedArticlesProps> = ({
  articles,
}: BlogRelatedArticlesProps) => {
  if (!articles || articles.length === 0) return null;
  return (
    <div className="my-8 border-t border-grey-dark pt-8">
      <h2 className="mb-8 font-jekoBold text-grey-dark">Related Articles</h2>
      <div className="flex flex-wrap gap-8">
        {articles.map((article) => (
          <BlogRelatedArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogRelatedArticles;
