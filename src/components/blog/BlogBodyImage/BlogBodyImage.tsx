import Image from 'next/image';
import React from 'react';

interface BlogBodyImageProps {
  image: {
    url: string;
    alt?: string;
    height: number;
    width: number;
  };
}

const BlogBodyImage: React.FC<BlogBodyImageProps> = ({
  image,
}: BlogBodyImageProps) => {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl">
      <Image
        src={image.url}
        alt={image.alt || 'Blog Body Image'}
        height={image.height}
        width={image.width}
        layout="responsive"
      />
    </div>
  );
};

export default BlogBodyImage;
