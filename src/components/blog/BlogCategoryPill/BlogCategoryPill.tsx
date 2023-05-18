import Link from 'next/link';

type PillSize = {
  small: string;
  large: string;
};

interface BlogCategoryPillProps {
  name: string;
  size?: keyof PillSize;
}

const baseStyles =
  'cursor-pointer rounded-32 border border-black font-jekoBold capitalize hover:border-rhubarb hover:bg-rhubarb hover:text-rhubarb-lite';

const dynamicStyles: PillSize = {
  small: 'px-2 text-xxs leading-4',
  large: 'py-2 px-3 text-base leading-4',
};

const BlogCategoryPill: React.FC<BlogCategoryPillProps> = ({
  name,
  size = 'small',
}: BlogCategoryPillProps) => {
  return (
    <div className="flex items-center">
      <Link href={`/blog/${name}`}>
        <span className={`${baseStyles} ${dynamicStyles[size]}`}>{name}</span>
      </Link>
    </div>
  );
};

export default BlogCategoryPill;
