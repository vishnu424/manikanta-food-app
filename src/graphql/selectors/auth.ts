export const CUSTOMER_BASIC_INFO_SELECTOR = `
_id
role
firstName
lastName
email
`;

export const AUTH_SELECTOR = `
accessToken
customerId
refreshToken
usid
customerInfo {
  _id
  role
  firstName
  lastName
  email
}
`;
