import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import LinkText from '@/components/common/LinkText/LinkText';
import type { BlogArticleRecordModelType } from '@/models/api';

import BlogCategoryPill from '../BlogCategoryPill/BlogCategoryPill';

interface BlogRelatedArticleProps {
  article: BlogArticleRecordModelType;
}

const BlogRelatedArticle: React.FC<BlogRelatedArticleProps> = ({ article }) => {
  const {
    title,
    heroImage,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _publishedAt,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _createdAt,
    slug,
    category,
  } = article;
  const publishDate = dayjs(_publishedAt || _createdAt).format('D MMMM YYYY');
  const linkUrl = `/blog/${category.name}/${slug}`;
  return (
    <div className="flex max-w-md">
      <Link href={linkUrl}>
        <div className="min-w-[120px] cursor-pointer overflow-hidden rounded-2xl">
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            height={120}
            width={120}
            objectFit="cover"
            objectPosition="center"
            layout="responsive"
          />
        </div>
      </Link>
      <div className="flex flex-col px-4">
        <div className="flex items-center pb-2">
          <span className="pr-4 font-jekoBold text-xxs leading-4 text-grey-dark">
            {publishDate}
          </span>
          <BlogCategoryPill name={category.name} size="small" />
        </div>
        <Link href={linkUrl}>
          <p className="cursor-pointer pb-2 font-jekoBold">{title}</p>
        </Link>
        <LinkText hasArrow={true} link={linkUrl} text="Read Now" />
      </div>
    </div>
  );
};

export default BlogRelatedArticle;
