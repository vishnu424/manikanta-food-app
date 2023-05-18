import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { BlogArticleRecordModelType } from '@/models/api';

import BlogCategoryPill from '../BlogCategoryPill/BlogCategoryPill';

type CardSize = {
  small: number;
  large: number;
};

interface BlogArticleCardProps {
  article: BlogArticleRecordModelType;
  size?: keyof CardSize;
  showSummary?: boolean;
}

const widthSize: CardSize = {
  small: 120,
  large: 640,
};

const heightSizes: CardSize = {
  small: 120,
  large: 445,
};

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({
  article,
  showSummary,
  size = 'small',
}) => {
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
  const height = heightSizes[size];
  const width = widthSize[size];
  return (
    <Link href={linkUrl}>
      <div
        className={`flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-off-grey`}
      >
        <div>
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            height={height}
            width={width}
            objectFit="cover"
            objectPosition="center"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col p-4">
          <div className="flex items-center pb-4">
            <BlogCategoryPill name={category.name} size="large" />
          </div>
          <p className="pb-4 font-jekoBold">{title}</p>
          {showSummary && <p className="pb-4">{summary}</p>}
          <span className="font-jekoBold text-sm leading-4 text-grey-dark">
            {publishDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogArticleCard;
