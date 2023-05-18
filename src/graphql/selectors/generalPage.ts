// export const GENERAL_PAGE_SELECTOR = `
// sections {
//   ... on HomePageHeaderSectionRecord {
//     __typename
//     primaryButtonLink
//     primaryButtonText
//     secondaryButtonLink
//     secondaryButtonText
//     title
//     desktopImage {
//       url(imgixParams: $imgixParams)
//     }
//     description
//     mobileImage {
//       url(imgixParams: $imgixParams)
//     }
//   }
//   ... on GeneralCampaignSectionRecord {
//     __typename
//     buttonLink
//     buttonText
//     description
//     title
//     desktopImage {
//       url(imgixParams: $imgixParams)
//     }
//     mobileImage {
//       url(imgixParams: $imgixParams)
//     }
//   }
//   ... on GeneralPageLearnMoreRecord {
//     __typename
//     buttonText
//     buttonLink
//     cards {
//       description
//       image {
//         url(imgixParams: $imgixParams)
//       }
//     }
//   }
//   ... on ProductCategorySectionRecord {
//     __typename
//     title
//     buttonText
//     buttonLink
//     cards {
//       link
//       text
//       image {
//         url(imgixParams: $imgixParams)
//         alt
//         title
//       }
//     }
//   }
// }
// `;

export const GENERAL_PAGE_SELECTOR = `
sections {
  ... on HomePageHeaderSectionRecord {
__typename
primaryButtonLink
primaryButtonText
secondaryButtonLink
secondaryButtonText
title
desktopImage {
  url
  alt
  title
}
description
mobileImage {
  url
  alt
  title
}
}
... on GeneralCampaignSectionRecord {
__typename
buttonLink
buttonText
description
title
desktopImage {
  url
  alt
  title
}
mobileImage {
  url
  alt
  title
}
}
... on GeneralPageLearnMoreRecord {
__typename
buttonText
buttonLink
cards {
  description
  image {
    url
    alt
    title
  }
}
}
... on ProductCategorySectionRecord {
__typename
title
buttonText
buttonLink
cards {
  link
  text
  image {
    url
    alt
    title
  }
}
}
  ... on GeneralHowItWorksSectionRecord {
    __typename
    buttonText
    buttonLink
    bulletList {
      title
      description
    }
    desktopImage {
      url
      alt
      title
    }
    mobileImage {
      url
      alt
      title
    }
    title
  }
  ... on GeneralPlanSectionRecord {
    __typename
    title
    plans {
      buttonLink
      buttonText
      image {
        url
        alt
        title
      }
      plan
    }
  }
  ... on GeneralReviewSectionRecord {
    __typename
    title
    primaryButtonLink
    primaryButtonText
    secondaryButtonLink
    secondaryButtonText
    image {
      url
      alt
      title
    }
    reviews {
      review
      image {
        url
        title
        alt
      }
      author
    }
  }
  ... on GeneralStockistSectionRecord {
    __typename
    title
    primaryButtonText
    primaryButtonLink
    secondaryButtonLink
    secondaryButtonText
    description
    desktopImage {
      url
      title
      alt
    }
    mobileImage {
      alt
      title
      url
    }
    stockistDesktopImage {
      alt
      title
      url
    }
    stockistMobileImage {
      alt
      title
      url
    }
  }
}
`;
