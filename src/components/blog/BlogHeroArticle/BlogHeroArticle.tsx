import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { BlogArticleRecordModelType } from '@/models/api';

import BlogCategoryPill from '../BlogCategoryPill/BlogCategoryPill';

interface BlogHeroArticleProps {
  article: BlogArticleRecordModelType;
}

const BlogHeroArticle: React.FC<BlogHeroArticleProps> = ({ article }) => {
  const {
    title,
    heroImage,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _publishedAt,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _createdAt,
    slug,
    category,
    summary,
  } = article;
  const publishDate = dayjs(_publishedAt || _createdAt).format('D MMMM YYYY');
  const linkUrl = `/blog/${category.name}/${slug}`;
  return (
    <div className="flex flex-col">
      <Link href={linkUrl}>
        <div className="relative mb-8 h-96 w-full cursor-pointer overflow-hidden rounded-2xl lg:h-[612px]">
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="flex max-w-4xl flex-col px-4">
        <BlogCategoryPill name={category.name} size="large" />
        <Link href={linkUrl}>
          <p className="my-4 cursor-pointer pb-2 font-jekoBold text-7xl leading-tight">
            {title}
          </p>
        </Link>
        <p className="text-3xl leading-tight">{summary}</p>
        <span className="py-4 pr-4 font-jekoBold text-grey-dark">
          {publishDate}
        </span>
      </div>
    </div>
  );
};

export default BlogHeroArticle;
