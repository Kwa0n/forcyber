import { gql } from "@apollo/client";

export const GET_RECOMMENDATIONS = gql`
  query($address: String!) {
    recommendations(address: $address, first: Int) {
      result
      data {
          pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
          }
          list {
              address
              domain
              avatar
              recommendationReason
              followerCount
          }
      }
    }
  }
`;