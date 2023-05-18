import dayjs from 'dayjs';
import Image from 'next/image';

import type { BlogArticleRecordModelType } from '@/models/api';

import BlogCategoryPill from '../BlogCategoryPill/BlogCategoryPill';

interface BlogArticleHeaderProps {
  article: BlogArticleRecordModelType;
}

const BlogArticleHeader: React.FC<BlogArticleHeaderProps> = ({
  article,
}: BlogArticleHeaderProps) => {
  const {
    category,
    title,
    heroImage,
    author,
    authorByline,
    authorImage,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _publishedAt,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _createdAt,
  } = article;
  const publishDate = dayjs(_publishedAt || _createdAt).format('D MMMM YYYY');

  return (
    <>
      <div className="mb-8 flex justify-center">
        <BlogCategoryPill name={category.name} size="large" />
      </div>
      <h1 className="mx-auto mb-8 max-w-4xl text-center">{title}</h1>
      <div className="mb-8 flex justify-center">
        <p className="font-jekoBold text-base text-grey-dark">{publishDate}</p>
      </div>
      <div className="relative mb-8 h-96 w-full overflow-hidden rounded-2xl lg:h-[612px]">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mb-8 flex xl:px-44">
        <div className="min-w-[48px]">
          <Image
            className="rounded-full"
            src={authorImage.url}
            alt={authorImage.alt}
            width={48}
            height={48}
            layout="fixed"
          />
        </div>
        <div className="pl-4 font-jekoBold text-grey-dark">
          <p>{author}</p>
          <p>{authorByline}</p>
        </div>
      </div>
    </>
  );
};

export default BlogArticleHeader;
