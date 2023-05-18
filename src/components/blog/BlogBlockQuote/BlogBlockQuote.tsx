import React from 'react';

interface BlogBlockQuoteProps {
  children: React.ReactNode;
}

const BlogBlockQuote: React.FC<BlogBlockQuoteProps> = ({
  children,
}: BlogBlockQuoteProps) => {
  return (
    <blockquote className="mb-8 rounded-2xl bg-rhubarb-lite p-8 pb-0 text-3xl leading-9">
      {children}
    </blockquote>
  );
};

export default BlogBlockQuote;
