export const LANDING_PAGE_SELECTOR = `
headersection {
  id
  buttonLink
  buttonText
  description
  title
  image {
    url
  }
}
productsection {
  __typename
  description
  title
  cards {
    primaryButtonText
    primaryButtonLink
    shortDescription
    product {
      displayName
      tileImage {
        url
        alt
      }
      sku
      grossPrice
    }
  }
}
benefitsection {
  __typename
  id
  title
  description
  list {
    title
    description
    icon {
      url
    }
  }
}
bundlesection {
  __typename
  id
  title
  description
  cards {
    primaryButtonText
    primaryButtonLink
    secondaryButtonText
    secondaryButtonLink
    shortDescription
    product {
      displayName
      tileImage {
        url
        alt
      }
      sku
      grossPrice
    }
  }
}
testimonialsection {
  __typename
    image {
      url
      title
      alt
    }
    title
    description
    author
}
`;
