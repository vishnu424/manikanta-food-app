import { gql } from 'graphql-request';

export const FILTER_SELECTOR = `
key
sections {
  id
  name
  displayType
  values {
    id
    name
    showCount
    key
    value
    data
    singleKey
    multiKey
    icon {
      url
    }
    iconActive {
      url
    }
    subValues {
      id
      name
      showCount
      key
      value
      data
      singleKey
      multiKey
    }
  }
}`;

export const SORT_SELECTOR = gql`
  key
  sortOption {
    id
    name
    data
}`;

export const PRODUCT_SELECTOR = `
_id
name
displayCategory
displaySubCategory
sku
status
barcode
netPrice
grossPrice
promotionTotal
hasSubProducts
promotionTotal
subProducts {
  sku
  qty
}
liveAt
shelfLifeDays
attributes {
  name
  value
}
cms {
  id
  tileImage {
    url
  }
  displayPageImages {
    url
  }
  displayPageImages {
    url
  }
  productInstruction {
    instructions {
      title
      text
    }
  }
  description {
    blocks
    links
    value
  }
  dietaryTags {
    text
    icon {
      url
    } 
  }
  tags {
    text
    icon {
      url
    }
  }
  primaryDisplayTag {
    text
    fontColor {
      hex
    }
    backgroundColor {
      hex
    }
  }
  secondaryDisplayTag {
    text
    fontColor {
      hex
    }
    backgroundColor {
      hex
    }
  }
  displaySubcategory {
    key
    name
  }
}
nutritionalInfo {
  size
  unit
  calories
  carbs
  fats
  protein
  ingredients
  allergens
  panelInfo {
    display
    name
    per100
    perServing
    unit
  }
}
`;

export const PRODUCT_CATEGORY_SELECTOR = `
key
name
subcategories {
  key
  name
}
categoryDescription
`;

export const PRODUCT_SKU_SELECTOR = `
_id
sku
`;

export const DELIVERY_INFO_SELECTOR = `
name
postcode
state
fee
zoneCode
deliveryDetails {
  date
  formattedDate
  timeslots
  isExpress
}
cutoffTime
`;
