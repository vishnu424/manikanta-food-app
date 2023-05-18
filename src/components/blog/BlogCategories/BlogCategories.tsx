import Link from 'next/link';
import React from 'react';

import type { BlogCategoryRecordModelType } from '@/models/api';

interface BlogCategoriesProps {
  categories: BlogCategoryRecordModelType[];
  selectedCategory?: BlogCategoryRecordModelType;
}

const pillStyles = {
  base: 'cursor-pointer rounded-32 py-1 px-4 font-jekoBold capitalize',
  selected: 'bg-rhubarb text-rhubarb-lite',
  unselected:
    'bg-rhubarb-lite text-rhubarb hover:bg-rhubarb hover:text-rhubarb-lite',
};

const BlogCategories: React.FC<BlogCategoriesProps> = ({
  categories,
  selectedCategory,
}: BlogCategoriesProps) => {
  if (!categories || categories.length === 0) return null;
  return (
    <div className=" bg-off-white p-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-8">
        <Link href={`/blog`}>
          <div
            className={`${pillStyles.base} ${
              selectedCategory ? pillStyles.unselected : pillStyles.selected
            }`}
          >
            All
          </div>
        </Link>
        {categories.map((category) => {
          if (category.name === 'all') return null;
          const dynamicStyles =
            category.name === selectedCategory?.name
              ? pillStyles.selected
              : pillStyles.unselected;
          return (
            <Link key={category.id} href={`/blog/${category.name}`}>
              <div className={`${pillStyles.base} ${dynamicStyles}`}>
                {category.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCategories;
