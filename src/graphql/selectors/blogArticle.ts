export const BLOG_ARTICLE_SELECTOR = `
slug
title
category {
  id
  name
}
_publishedAt
author
authorByline
authorImage {
  url
}
heroImage {
  url
}
content {
  blocks {
    __typename
    ... on BlogBodyImageRecord {
      id
      image {
        url
        alt
        title
        height
        width
      }
    }
  }
  value
}
seoTitle
seoDescription
ogImage {
  url
}
`;

export const BLOG_ARTICLES_CARD_SELECTOR = `
slug
summary
category {
  id
  name
}
title
heroImage {
  url
  alt
  title
}
_publishedAt
_createdAt
`;

export const BLOG_CATEGORY_SELECTOR = `
id
name
seoTitle
seoDescription
ogImage {
  url
}
highlightedArticles {
  id
  ${BLOG_ARTICLES_CARD_SELECTOR}
}
`;
