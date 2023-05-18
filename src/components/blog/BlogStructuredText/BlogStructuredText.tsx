import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import {
  isBlockquote,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
} from 'datocms-structured-text-utils';
import Link from 'next/link';
import React from 'react';
import type { RenderBlockContext } from 'react-datocms';
import { renderNodeRule, StructuredText } from 'react-datocms';

import BlogBlockQuote from '../BlogBlockQuote/BlogBlockQuote';
import BlogBodyImage from '../BlogBodyImage/BlogBodyImage';

interface BlogStructuredTextProps {
  content: any;
}

const BlogStructuredText: React.FC<BlogStructuredTextProps> = ({
  content,
}: BlogStructuredTextProps) => {
  const renderBlock = (context: RenderBlockContext<any>) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (context.record.__typename) {
      case 'BlogBodyImageRecord':
        return <BlogBodyImage image={context.record.image} />;

      default:
        return null;
    }
  };
  return (
    <div className="xl:px-44">
      <StructuredText
        data={content}
        renderBlock={renderBlock}
        customNodeRules={[
          renderNodeRule(isBlockquote, ({ children, key }) => {
            return <BlogBlockQuote key={key}>{children}</BlogBlockQuote>;
          }),
          renderNodeRule(isHeading, ({ node, children, key }) => {
            // Prevent h1 tags from being inside blog content
            const headingLevel = node.level === 1 ? 2 : node.level;
            const HeadingTag =
              `h${headingLevel}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag className="mb-8 font-jekoBold" key={key}>
                {children}
              </HeadingTag>
            );
          }),
          renderNodeRule(isParagraph, ({ children, key }) => {
            return (
              <p className="pb-8 text-lg leading-6" key={key}>
                {children}
              </p>
            );
          }),
          renderNodeRule(isList, ({ node, children, key }) => {
            const listStyle =
              node.style === 'bulleted' ? 'list-disc' : 'list-decimal';
            return (
              <ul key={key} className={`${listStyle} pl-4 pb-8`}>
                {children}
              </ul>
            );
          }),
          renderNodeRule(isListItem, ({ children, key }) => {
            const childrenWithProps = React.Children.map(children, (child) => {
              if (!child) return null;
              if (typeof child === 'string') return child;
              return React.cloneElement(child, {
                className: child.props.className.replace('pb-8', ''),
              });
            });
            return (
              <li key={key} className="pb-2">
                {childrenWithProps}
              </li>
            );
          }),
          renderNodeRule(isLink, ({ node, key }) => {
            const linkUrl = node.url.replace(
              /https?:\/\/(www\.)?my(muscle|code)chef\.com/,
              ''
            );
            const isInternal = linkUrl.startsWith('/');
            const linkText = toPlainText(node);
            return (
              <span key={key} className="cursor-pointer text-blueberry">
                {isInternal ? (
                  <Link href={linkUrl}>{linkText}</Link>
                ) : (
                  <a href={linkUrl} target="_blank" rel="noreferrer">
                    {linkText}
                  </a>
                )}
              </span>
            );
          }),
        ]}
      />
    </div>
  );
};

export default BlogStructuredText;
